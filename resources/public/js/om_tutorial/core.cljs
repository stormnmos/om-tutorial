(ns om-tutorial.core
  (:require [goog.dom :as gdom]
            [om.next :as om :refer-macros [defui]]
            [om.dom :as dom]
            [sablono.core :as html :refer-macros [html]]
            [datascript.core :as d]
            [secretary.core :as secretary :refer-macros [defroute]]
            [storm-blog.db :as db]
            [ext.chessboard :as cb]))

(enable-console-print!)

(secretary/set-config! :prefix "#") 

(def conn (d/create-conn {}))

(def testa (db/populate-db! conn))

(defn make-boards []
  (js/ChessBoard "board1" #js {:draggable true
                               :dropOffBoard "trash"
                               :snapSpeed 100
                               :position "start"})
  (js/ChessBoard "board2" #js {:draggable true
                               :dropOffBoard "trash"
                               :snapSpeed 100
                               :position "start"
                               :orientation "black"}))

(d/transact! conn 
             [{:db/id -1
               :app/title "Hello, Datascript!"
               :app/count 0}])

(defmulti read om/dispatch)

(defmethod read :app/board
  [{:keys [state selector]} _ _]
  {:value (d/q '[:find [(pull ?e ?selector) ...]
                 :in $ ?selector
                 :where [?e :app/board]]
               (d/db state) selector)})

(defmethod read :app/counter
  [{:keys [state selector]} _ _]
  {:value (d/q '[:find [(pull ?e ?selector) ...]
                 :in $ ?selector
                 :where [?e :app/title]]
               (d/db state) selector)})

(defmethod read :app/header
  [{:keys [state selector]} _ _]
  {:value (d/q '[:find [(pull ?e ?selector) ...]
                 :in $ ?selector
                 :where [?e :widget/type :header]]
               (d/db state) selector)})

(defmulti mutate om/dispatch)

(defmethod mutate 'app/increment
  [{:keys [state]} _ entity]
  {:value [:app/counter]
   :action (fn [] (d/transact! state
                    [(update-in entity [:app/count] inc)]))})

(defmethod mutate 'app/add-game
  [{:keys [state]} _ {:keys [entity game]}]
  {:value [:app/board]
   :action (fn [] (d/transact! state
                               [(assoc-in entity [:board/game] (str game))]))})

(defmethod mutate 'app/set-game
  [{:keys [state]} _ {:keys [entity fem]}]
  {:value [:app/board]
   :action (fn [] (d/transact! state
                    [(assoc-in entity [:board/fem] fem)]))})

(defmethod mutate 'app/change-board
  [{:keys [state]} _ entity]
  {:value [:app/game]})

(defui Header
  static om/IQuery
  (query [this]
    [{:app/header [:db/id :header/title]}])
  Object
  (render [this]
    (let [{:keys [header/title] :as entity}
          (get-in (om/props this) [:app/counter 0])]
      (html
       [:header.navbar.navbar-default.navbar-static-top {:role "banner"}
        [:.container
         [:.navbar-header
          [:button.navbar-toggle {:type "button" :data-toggle "collapse"
                                  :data-target ".navbar-collapse"}
           [:span.sr-only "Toggle Navigation"]
           (map (fn [] [:span.icon-bar]) (range 3))]
          [:a.navbar-brand {:href "#/article/1"} title]]
         [:nav.collapse.navbar-collapse {:role "navigation"}
          [:ul.nav.navbar-nav
           (map (fn [title] [:li [:a {:href "#/article/1"} title]])
                ["Get Started" "Edit" "Visualize" "Prototype"])]]]]))))

(defui Counter
  static om/IQuery
  (query [this]
    [{:app/counter [:db/id :app/title :app/count]}])
  Object
  (render [this]
    (let [{:keys [app/title app/count] :as entity}
          (get-in (om/props this) [:app/counter 0])]
      (html
       [:div
        [:h2 title]
        [:span (str "Count: " count)]
        [:button {:on-click (fn [e] (om/transact! this
                                                  `[(app/increment ~entity)]))}
         "Click me"]]))))

(defn make-board [id f]
  (js/ChessBoard id
     #js {:draggable true :dropOffBoard "trash"
          :snapSpeed 100 :position "start"
          :onChange f}))

(defui ChessBoard
  static om/IQuery
  (query [this]
    [{:app/board [:db/id :board/title 
                  :board/fem :board/game]}])
  Object
  (render [this]
    (html
     [:.boards 
      [:div#board1 {:style {:width "400px"}} "Board-1"]
      [:div#board2 {:style {:width "400px"}} "Board-2"]]))
  (componentDidMount [this]
    (let [{:keys [board/fem] :as entity}
          (get-in (om/props this) [:app/board 0])
          game (make-board "board2"
                 (fn [old new]
                   (om/transact! this
                     `[(app/set-game {:entity ~entity
                                      :fem (.objToFen js/ChessBoard ~new)})])))]
      (js/ChessBoard "board1"
        #js {:draggable true :dropOffBoard "trash"
             :snapSpeed 100 :position fem})
      (om/transact! this `[(app/add-game 
                            {:entity ~entity
                             :game ~game})])))
  (componentWillUpdate [this n-props n-state]
    (let [{:keys [board/fem board/game] :as entity}
          (get-in n-props [:app/board 0])]
      (.position game fem true))))

(def reconciler
  (om/reconciler {:state conn
                  :parser (om/parser {:read read :mutate mutate})}))

(om/add-root! reconciler
              ChessBoard (gdom/getElement "app"))

(defn cb-start! [board]
  (.start board))

(defn cb-position! [board fem]
  (.position board fem true))
