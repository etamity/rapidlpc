// AUTO-GENERATED
declare module "godot" {
    namespace Timer {
        enum TimerProcessCallback {
            /** Update the timer every physics process frame (see [constant Node.NOTIFICATION_INTERNAL_PHYSICS_PROCESS]). */
            TIMER_PROCESS_PHYSICS = 0,
            
            /** Update the timer every process (rendered) frame (see [constant Node.NOTIFICATION_INTERNAL_PROCESS]). */
            TIMER_PROCESS_IDLE = 1,
        }
    }
    /** A countdown timer.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_timer.html  
     */
    class Timer<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Starts the timer, or resets the timer if it was started already. Fails if the timer is not inside the tree. If [param time_sec] is greater than `0`, this value is used for the [member wait_time].  
         *      
         *  **Note:** This method does not resume a paused timer. See [member paused].  
         */
        start(time_sec?: float64 /* = -1 */): void
        
        /** Stops the timer. */
        stop(): void
        
        /** Returns `true` if the timer is stopped or has not started. */
        is_stopped(): boolean
        
        /** Specifies when the timer is updated during the main loop (see [enum TimerProcessCallback]). */
        get process_callback(): int64
        set process_callback(value: int64)
        
        /** The time required for the timer to end, in seconds. This property can also be set every time [method start] is called.  
         *      
         *  **Note:** Timers can only process once per physics or process frame (depending on the [member process_callback]). An unstable framerate may cause the timer to end inconsistently, which is especially noticeable if the wait time is lower than roughly `0.05` seconds. For very short timers, it is recommended to write your own code instead of using a [Timer] node. Timers are also affected by [member Engine.time_scale].  
         */
        get wait_time(): float64
        set wait_time(value: float64)
        
        /** If `true`, the timer will stop after reaching the end. Otherwise, as by default, the timer will automatically restart. */
        get one_shot(): boolean
        set one_shot(value: boolean)
        
        /** If `true`, the timer will start immediately when it enters the scene tree.  
         *      
         *  **Note:** After the timer enters the tree, this property is automatically set to `false`.  
         *      
         *  **Note:** This property does nothing when the timer is running in the editor.  
         */
        get autostart(): boolean
        set autostart(value: boolean)
        
        /** If `true`, the timer is paused. A paused timer does not process until this property is set back to `false`, even when [method start] is called. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the timer will ignore [member Engine.time_scale] and update with the real, elapsed time. */
        get ignore_time_scale(): boolean
        set ignore_time_scale(value: boolean)
        
        /** The timer's remaining time in seconds. This is always `0` if the timer is stopped.  
         *      
         *  **Note:** This property is read-only and cannot be modified. It is based on [member wait_time].  
         */
        get time_left(): float64
        
        /** Emitted when the timer reaches the end. */
        readonly timeout: Signal<() => void>
    }
    /** Class representing a torus [PrimitiveMesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_torusmesh.html  
     */
    class TorusMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The inner radius of the torus. */
        get inner_radius(): float64
        set inner_radius(value: float64)
        
        /** The outer radius of the torus. */
        get outer_radius(): float64
        set outer_radius(value: float64)
        
        /** The number of slices the torus is constructed of. */
        get rings(): int64
        set rings(value: int64)
        
        /** The number of edges each ring of the torus is constructed of. */
        get ring_segments(): int64
        set ring_segments(value: int64)
    }
    namespace TouchScreenButton {
        enum VisibilityMode {
            /** Always visible. */
            VISIBILITY_ALWAYS = 0,
            
            /** Visible on touch screens only. */
            VISIBILITY_TOUCHSCREEN_ONLY = 1,
        }
    }
    /** Button for touch screen devices for gameplay use.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_touchscreenbutton.html  
     */
    class TouchScreenButton<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if this button is currently pressed. */
        is_pressed(): boolean
        
        /** The button's texture for the normal state. */
        get texture_normal(): null | Texture2D
        set texture_normal(value: null | Texture2D)
        
        /** The button's texture for the pressed state. */
        get texture_pressed(): null | Texture2D
        set texture_pressed(value: null | Texture2D)
        
        /** The button's bitmask. */
        get bitmask(): null | BitMap
        set bitmask(value: null | BitMap)
        
        /** The button's shape. */
        get shape(): null | Shape2D
        set shape(value: null | Shape2D)
        
        /** If `true`, the button's shape is centered in the provided texture. If no texture is used, this property has no effect. */
        get shape_centered(): boolean
        set shape_centered(value: boolean)
        
        /** If `true`, the button's shape is visible in the editor. */
        get shape_visible(): boolean
        set shape_visible(value: boolean)
        
        /** If `true`, the [signal pressed] and [signal released] signals are emitted whenever a pressed finger goes in and out of the button, even if the pressure started outside the active area of the button.  
         *      
         *  **Note:** This is a "pass-by" (not "bypass") press mode.  
         */
        get passby_press(): boolean
        set passby_press(value: boolean)
        
        /** The button's action. Actions can be handled with [InputEventAction]. */
        get action(): StringName
        set action(value: StringName)
        
        /** The button's visibility mode. See [enum VisibilityMode] for possible values. */
        get visibility_mode(): int64
        set visibility_mode(value: int64)
        
        /** Emitted when the button is pressed (down). */
        readonly pressed: Signal<() => void>
        
        /** Emitted when the button is released (up). */
        readonly released: Signal<() => void>
    }
    /** A language translation that maps a collection of strings to their individual translations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_translation.html  
     */
    class Translation extends Resource {
        constructor(identifier?: any)
        /** Virtual method to override [method get_plural_message]. */
        /* gdvirtual */ _get_plural_message(src_message: StringName, src_plural_message: StringName, n: int64, context: StringName): StringName
        
        /** Virtual method to override [method get_message]. */
        /* gdvirtual */ _get_message(src_message: StringName, context: StringName): StringName
        
        /** Adds a message if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_message(src_message: StringName, xlated_message: StringName, context?: StringName /* = '' */): void
        
        /** Adds a message involving plural translation if nonexistent, followed by its translation.  
         *  An additional context could be used to specify the translation context or differentiate polysemic words.  
         */
        add_plural_message(src_message: StringName, xlated_messages: PackedStringArray | string[], context?: StringName /* = '' */): void
        
        /** Returns a message's translation. */
        get_message(src_message: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns a message's translation involving plurals.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        get_plural_message(src_message: StringName, src_plural_message: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Erases a message. */
        erase_message(src_message: StringName, context?: StringName /* = '' */): void
        
        /** Returns all the messages (keys). */
        get_message_list(): PackedStringArray
        
        /** Returns all the messages (translated text). */
        get_translated_message_list(): PackedStringArray
        
        /** Returns the number of existing messages. */
        get_message_count(): int64
        get messages(): GDictionary
        set messages(value: GDictionary)
        
        /** The locale of the translation. */
        get locale(): string
        set locale(value: string)
    }
    /** A self-contained collection of [Translation] resources.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_translationdomain.html  
     */
    class TranslationDomain extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Translation] instance that best matches [param locale]. Returns `null` if there are no matches. */
        get_translation_object(locale: string): null | Translation
        
        /** Adds a translation. */
        add_translation(translation: Translation): void
        
        /** Removes the given translation. */
        remove_translation(translation: Translation): void
        
        /** Removes all translations. */
        clear(): void
        
        /** Returns the current locale's translation for the given message and context. */
        translate(message: StringName, context?: StringName /* = '' */): StringName
        
        /** Returns the current locale's translation for the given message, plural message and context.  
         *  The number [param n] is the number or quantity of the plural object. It will be used to guide the translation system to fetch the correct plural form for the selected language.  
         */
        translate_plural(message: StringName, message_plural: StringName, n: int64, context?: StringName /* = '' */): StringName
        
        /** Returns the pseudolocalized string based on the [param message] passed in. */
        pseudolocalize(message: StringName): StringName
        
        /** If `true`, enables pseudolocalization for the project. This can be used to spot untranslatable strings or layout issues that may occur once the project is localized to languages that have longer strings than the source language.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_enabled(): boolean
        set pseudolocalization_enabled(value: boolean)
        
        /** Replace all characters with their accented variants during pseudolocalization.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_accents_enabled(): boolean
        set pseudolocalization_accents_enabled(value: boolean)
        
        /** Double vowels in strings during pseudolocalization to simulate the lengthening of text due to localization.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_double_vowels_enabled(): boolean
        set pseudolocalization_double_vowels_enabled(value: boolean)
        
        /** If `true`, emulate bidirectional (right-to-left) text when pseudolocalization is enabled. This can be used to spot issues with RTL layout and UI mirroring that will crop up if the project is localized to RTL languages such as Arabic or Hebrew.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_fake_bidi_enabled(): boolean
        set pseudolocalization_fake_bidi_enabled(value: boolean)
        
        /** Replace all characters in the string with `*`. Useful for finding non-localizable strings.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_override_enabled(): boolean
        set pseudolocalization_override_enabled(value: boolean)
        
        /** Skip placeholders for string formatting like `%s` or `%f` during pseudolocalization. Useful to identify strings which need additional control characters to display correctly.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_skip_placeholders_enabled(): boolean
        set pseudolocalization_skip_placeholders_enabled(value: boolean)
        
        /** The expansion ratio to use during pseudolocalization. A value of `0.3` is sufficient for most practical purposes, and will increase the length of each string by 30%.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_expansion_ratio(): float64
        set pseudolocalization_expansion_ratio(value: float64)
        
        /** Prefix that will be prepended to the pseudolocalized string.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_prefix(): string
        set pseudolocalization_prefix(value: string)
        
        /** Suffix that will be appended to the pseudolocalized string.  
         *      
         *  **Note:** Updating this property does not automatically update texts in the scene tree. Please propagate the [constant MainLoop.NOTIFICATION_TRANSLATION_CHANGED] notification manually after you have finished modifying pseudolocalization related options.  
         */
        get pseudolocalization_suffix(): string
        set pseudolocalization_suffix(value: string)
    }
    namespace Tree {
        enum SelectMode {
            /** Allows selection of a single cell at a time. From the perspective of items, only a single item is allowed to be selected. And there is only one column selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_SINGLE = 0,
            
            /** Allows selection of a single row at a time. From the perspective of items, only a single items is allowed to be selected. And all the columns are selected in the selected item.  
             *  The focus cursor is always hidden in this mode, but it is positioned at the first column of the current selection, making the currently selected item the currently focused item.  
             */
            SELECT_ROW = 1,
            
            /** Allows selection of multiple cells at the same time. From the perspective of items, multiple items are allowed to be selected. And there can be multiple columns selected in each selected item.  
             *  The focus cursor is visible in this mode, the item or column under the cursor is not necessarily selected.  
             */
            SELECT_MULTI = 2,
        }
        enum DropModeFlags {
            /** Disables all drop sections, but still allows to detect the "on item" drop section by [method get_drop_section_at_position].  
             *      
             *  **Note:** This is the default flag, it has no effect when combined with other flags.  
             */
            DROP_MODE_DISABLED = 0,
            
            /** Enables the "on item" drop section. This drop section covers the entire item.  
             *  When combined with [constant DROP_MODE_INBETWEEN], this drop section halves the height and stays centered vertically.  
             */
            DROP_MODE_ON_ITEM = 1,
            
            /** Enables "above item" and "below item" drop sections. The "above item" drop section covers the top half of the item, and the "below item" drop section covers the bottom half.  
             *  When combined with [constant DROP_MODE_ON_ITEM], these drop sections halves the height and stays on top / bottom accordingly.  
             */
            DROP_MODE_INBETWEEN = 2,
        }
    }
    /** A control used to show a set of internal [TreeItem]s in a hierarchical structure.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_tree.html  
     */
    class Tree<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Clears the tree. This removes all items. */
        clear(): void
        
        /** Creates an item in the tree and adds it as a child of [param parent], which can be either a valid [TreeItem] or `null`.  
         *  If [param parent] is `null`, the root item will be the parent, or the new item will be the root itself if the tree is empty.  
         *  The new item will be the [param index]-th child of parent, or it will be the last child if there are not enough siblings.  
         */
        create_item(parent?: TreeItem /* = undefined */, index?: int64 /* = -1 */): TreeItem
        
        /** Returns the tree's root item, or `null` if the tree is empty. */
        get_root(): null | TreeItem
        
        /** Overrides the calculated minimum width of a column. It can be set to `0` to restore the default behavior. Columns that have the "Expand" flag will use their "min_width" in a similar fashion to [member Control.size_flags_stretch_ratio]. */
        set_column_custom_minimum_width(column: int64, min_width: int64): void
        
        /** If `true`, the column will have the "Expand" flag of [Control]. Columns that have the "Expand" flag will use their expand ratio in a similar fashion to [member Control.size_flags_stretch_ratio] (see [method set_column_expand_ratio]). */
        set_column_expand(column: int64, expand: boolean): void
        
        /** Sets the relative expand ratio for a column. See [method set_column_expand]. */
        set_column_expand_ratio(column: int64, ratio: int64): void
        
        /** Allows to enable clipping for column's content, making the content size ignored. */
        set_column_clip_content(column: int64, enable: boolean): void
        
        /** Returns `true` if the column has enabled expanding (see [method set_column_expand]). */
        is_column_expanding(column: int64): boolean
        
        /** Returns `true` if the column has enabled clipping (see [method set_column_clip_content]). */
        is_column_clipping_content(column: int64): boolean
        
        /** Returns the expand ratio assigned to the column. */
        get_column_expand_ratio(column: int64): int64
        
        /** Returns the column's width in pixels. */
        get_column_width(column: int64): int64
        
        /** Returns the next selected [TreeItem] after the given one, or `null` if the end is reached.  
         *  If [param from] is `null`, this returns the first selected item.  
         */
        get_next_selected(from: TreeItem): null | TreeItem
        
        /** Returns the currently focused item, or `null` if no item is focused.  
         *  In [constant SELECT_ROW] and [constant SELECT_SINGLE] modes, the focused item is same as the selected item. In [constant SELECT_MULTI] mode, the focused item is the item under the focus cursor, not necessarily selected.  
         *  To get the currently selected item(s), use [method get_next_selected].  
         */
        get_selected(): null | TreeItem
        
        /** Selects the specified [TreeItem] and column. */
        set_selected(item: TreeItem, column: int64): void
        
        /** Returns the currently focused column, or -1 if no column is focused.  
         *  In [constant SELECT_SINGLE] mode, the focused column is the selected column. In [constant SELECT_ROW] mode, the focused column is always 0 if any item is selected. In [constant SELECT_MULTI] mode, the focused column is the column under the focus cursor, and there are not necessarily any column selected.  
         *  To tell whether a column of an item is selected, use [method TreeItem.is_selected].  
         */
        get_selected_column(): int64
        
        /** Returns the last pressed button's index. */
        get_pressed_button(): int64
        
        /** Deselects all tree items (rows and columns). In [constant SELECT_MULTI] mode also removes selection cursor. */
        deselect_all(): void
        
        /** Returns the currently edited item. Can be used with [signal item_edited] to get the item that was modified.  
         *    
         */
        get_edited(): null | TreeItem
        
        /** Returns the column for the currently edited item. */
        get_edited_column(): int64
        
        /** Edits the selected tree item as if it was clicked.  
         *  Either the item must be set editable with [method TreeItem.set_editable] or [param force_edit] must be `true`.  
         *  Returns `true` if the item could be edited. Fails if no item is selected.  
         */
        edit_selected(force_edit?: boolean /* = false */): boolean
        
        /** Returns the rectangle for custom popups. Helper to create custom cell controls that display a popup. See [method TreeItem.set_cell_mode]. */
        get_custom_popup_rect(): Rect2
        
        /** Returns the rectangle area for the specified [TreeItem]. If [param column] is specified, only get the position and size of that column, otherwise get the rectangle containing all columns. If a button index is specified, the rectangle of that button will be returned. */
        get_item_area_rect(item: TreeItem, column?: int64 /* = -1 */, button_index?: int64 /* = -1 */): Rect2
        
        /** Returns the tree item at the specified position (relative to the tree origin position). */
        get_item_at_position(position: Vector2): null | TreeItem
        
        /** Returns the column index at [param position], or -1 if no item is there. */
        get_column_at_position(position: Vector2): int64
        
        /** Returns the drop section at [param position], or -100 if no item is there.  
         *  Values -1, 0, or 1 will be returned for the "above item", "on item", and "below item" drop sections, respectively. See [enum DropModeFlags] for a description of each drop section.  
         *  To get the item which the returned drop section is relative to, use [method get_item_at_position].  
         */
        get_drop_section_at_position(position: Vector2): int64
        
        /** Returns the button ID at [param position], or -1 if no button is there. */
        get_button_id_at_position(position: Vector2): int64
        
        /** Makes the currently focused cell visible.  
         *  This will scroll the tree if necessary. In [constant SELECT_ROW] mode, this will not do horizontal scrolling, as all the cells in the selected row is focused logically.  
         *      
         *  **Note:** Despite the name of this method, the focus cursor itself is only visible in [constant SELECT_MULTI] mode.  
         */
        ensure_cursor_is_visible(): void
        
        /** Sets the title of a column. */
        set_column_title(column: int64, title: string): void
        
        /** Returns the column's title. */
        get_column_title(column: int64): string
        
        /** Sets the column title alignment. Note that [constant @GlobalScope.HORIZONTAL_ALIGNMENT_FILL] is not supported for column titles. */
        set_column_title_alignment(column: int64, title_alignment: HorizontalAlignment): void
        
        /** Returns the column title alignment. */
        get_column_title_alignment(column: int64): HorizontalAlignment
        
        /** Sets column title base writing direction. */
        set_column_title_direction(column: int64, direction: Control.TextDirection): void
        
        /** Returns column title base writing direction. */
        get_column_title_direction(column: int64): Control.TextDirection
        
        /** Sets language code of column title used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_column_title_language(column: int64, language: string): void
        
        /** Returns column title language code. */
        get_column_title_language(column: int64): string
        
        /** Returns the current scrolling position. */
        get_scroll(): Vector2
        
        /** Causes the [Tree] to jump to the specified [TreeItem]. */
        scroll_to_item(item: TreeItem, center_on_item?: boolean /* = false */): void
        
        /** The number of columns. */
        get columns(): int64
        set columns(value: int64)
        
        /** If `true`, column titles are visible. */
        get column_titles_visible(): boolean
        set column_titles_visible(value: boolean)
        
        /** If `true`, the currently selected cell may be selected again. */
        get allow_reselect(): boolean
        set allow_reselect(value: boolean)
        
        /** If `true`, a right mouse button click can select items. */
        get allow_rmb_select(): boolean
        set allow_rmb_select(value: boolean)
        
        /** If `true`, allows navigating the [Tree] with letter keys through incremental search. */
        get allow_search(): boolean
        set allow_search(value: boolean)
        
        /** If `true`, the folding arrow is hidden. */
        get hide_folding(): boolean
        set hide_folding(value: boolean)
        
        /** If `true`, recursive folding is enabled for this [Tree]. Holding down [kbd]Shift[/kbd] while clicking the fold arrow or using `ui_right`/`ui_left` shortcuts collapses or uncollapses the [TreeItem] and all its descendants. */
        get enable_recursive_folding(): boolean
        set enable_recursive_folding(value: boolean)
        
        /** If `true`, the tree's root is hidden. */
        get hide_root(): boolean
        set hide_root(value: boolean)
        
        /** The drop mode as an OR combination of flags. See [enum DropModeFlags] constants. Once dropping is done, reverts to [constant DROP_MODE_DISABLED]. Setting this during [method Control._can_drop_data] is recommended.  
         *  This controls the drop sections, i.e. the decision and drawing of possible drop locations based on the mouse position.  
         */
        get drop_mode_flags(): int64
        set drop_mode_flags(value: int64)
        
        /** Allows single or multiple selection. See the [enum SelectMode] constants. */
        get select_mode(): int64
        set select_mode(value: int64)
        
        /** If `true`, enables horizontal scrolling. */
        get scroll_horizontal_enabled(): boolean
        set scroll_horizontal_enabled(value: boolean)
        
        /** If `true`, enables vertical scrolling. */
        get scroll_vertical_enabled(): boolean
        set scroll_vertical_enabled(value: boolean)
        
        /** If `true`, tree items with no tooltip assigned display their text as their tooltip. See also [method TreeItem.get_tooltip_text] and [method TreeItem.get_button_tooltip_text]. */
        get auto_tooltip(): boolean
        set auto_tooltip(value: boolean)
        
        /** Emitted when an item is selected. */
        readonly item_selected: Signal<() => void>
        
        /** Emitted when a cell is selected. */
        readonly cell_selected: Signal<() => void>
        
        /** Emitted instead of [signal item_selected] if [member select_mode] is set to [constant SELECT_MULTI]. */
        readonly multi_selected: Signal<(item: TreeItem, column: int64, selected: boolean) => void>
        
        /** Emitted when an item is selected with a mouse button. */
        readonly item_mouse_selected: Signal<(mouse_position: Vector2, mouse_button_index: int64) => void>
        
        /** Emitted when a mouse button is clicked in the empty space of the tree. */
        readonly empty_clicked: Signal<(click_position: Vector2, mouse_button_index: int64) => void>
        
        /** Emitted when an item is edited. */
        readonly item_edited: Signal<() => void>
        
        /** Emitted when an item with [constant TreeItem.CELL_MODE_CUSTOM] is clicked with a mouse button. */
        readonly custom_item_clicked: Signal<(mouse_button_index: int64) => void>
        
        /** Emitted when an item's icon is double-clicked. For a signal that emits when any part of the item is double-clicked, see [signal item_activated]. */
        readonly item_icon_double_clicked: Signal<() => void>
        
        /** Emitted when an item is collapsed by a click on the folding arrow. */
        readonly item_collapsed: Signal<(item: TreeItem) => void>
        
        /** Emitted when [method TreeItem.propagate_check] is called. Connect to this signal to process the items that are affected when [method TreeItem.propagate_check] is invoked. The order that the items affected will be processed is as follows: the item that invoked the method, children of that item, and finally parents of that item. */
        readonly check_propagated_to_item: Signal<(item: TreeItem, column: int64) => void>
        
        /** Emitted when a button on the tree was pressed (see [method TreeItem.add_button]). */
        readonly button_clicked: Signal<(item: TreeItem, column: int64, id: int64, mouse_button_index: int64) => void>
        
        /** Emitted when a cell with the [constant TreeItem.CELL_MODE_CUSTOM] is clicked to be edited. */
        readonly custom_popup_edited: Signal<(arrow_clicked: boolean) => void>
        
        /** Emitted when an item is double-clicked, or selected with a `ui_accept` input event (e.g. using [kbd]Enter[/kbd] or [kbd]Space[/kbd] on the keyboard). */
        readonly item_activated: Signal<() => void>
        
        /** Emitted when a column's title is clicked with either [constant MOUSE_BUTTON_LEFT] or [constant MOUSE_BUTTON_RIGHT]. */
        readonly column_title_clicked: Signal<(column: int64, mouse_button_index: int64) => void>
        
        /** Emitted when a left mouse button click does not select any item. */
        readonly nothing_selected: Signal<() => void>
    }
    namespace TreeItem {
        enum TreeCellMode {
            /** Cell shows a string label, optionally with an icon. When editable, the text can be edited using a [LineEdit], or a [TextEdit] popup if [method set_edit_multiline] is used. */
            CELL_MODE_STRING = 0,
            
            /** Cell shows a checkbox, optionally with text and an icon. The checkbox can be pressed, released, or indeterminate (via [method set_indeterminate]). The checkbox can't be clicked unless the cell is editable. */
            CELL_MODE_CHECK = 1,
            
            /** Cell shows a numeric range. When editable, it can be edited using a range slider. Use [method set_range] to set the value and [method set_range_config] to configure the range.  
             *  This cell can also be used in a text dropdown mode when you assign a text with [method set_text]. Separate options with a comma, e.g. `"Option1,Option2,Option3"`.  
             */
            CELL_MODE_RANGE = 2,
            
            /** Cell shows an icon. It can't be edited nor display text. The icon is always centered within the cell. */
            CELL_MODE_ICON = 3,
            
            /** Cell shows as a clickable button. It will display an arrow similar to [OptionButton], but doesn't feature a dropdown (for that you can use [constant CELL_MODE_RANGE]). Clicking the button emits the [signal Tree.item_edited] signal. The button is flat by default, you can use [method set_custom_as_button] to display it with a [StyleBox].  
             *  This mode also supports custom drawing using [method set_custom_draw_callback].  
             */
            CELL_MODE_CUSTOM = 4,
        }
    }
    /** An internal control for a single item inside [Tree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_treeitem.html  
     */
    class TreeItem extends Object {
        constructor(identifier?: any)
        /** Sets the given column's cell mode to [param mode]. This determines how the cell is displayed and edited. See [enum TreeCellMode] constants for details. */
        set_cell_mode(column: int64, mode: TreeItem.TreeCellMode): void
        
        /** Returns the column's cell mode. */
        get_cell_mode(column: int64): TreeItem.TreeCellMode
        
        /** Sets the given column's auto translate mode to [param mode].  
         *  All columns use [constant Node.AUTO_TRANSLATE_MODE_INHERIT] by default, which uses the same auto translate mode as the [Tree] itself.  
         */
        set_auto_translate_mode(column: int64, mode: Node.AutoTranslateMode): void
        
        /** Returns the column's auto translate mode. */
        get_auto_translate_mode(column: int64): Node.AutoTranslateMode
        
        /** If [param multiline] is `true`, the given [param column] is multiline editable.  
         *      
         *  **Note:** This option only affects the type of control ([LineEdit] or [TextEdit]) that appears when editing the column. You can set multiline values with [method set_text] even if the column is not multiline editable.  
         */
        set_edit_multiline(column: int64, multiline: boolean): void
        
        /** Returns `true` if the given [param column] is multiline editable. */
        is_edit_multiline(column: int64): boolean
        
        /** If [param checked] is `true`, the given [param column] is checked. Clears column's indeterminate status. */
        set_checked(column: int64, checked: boolean): void
        
        /** If [param indeterminate] is `true`, the given [param column] is marked indeterminate.  
         *      
         *  **Note:** If set `true` from `false`, then column is cleared of checked status.  
         */
        set_indeterminate(column: int64, indeterminate: boolean): void
        
        /** Returns `true` if the given [param column] is checked. */
        is_checked(column: int64): boolean
        
        /** Returns `true` if the given [param column] is indeterminate. */
        is_indeterminate(column: int64): boolean
        
        /** Propagates this item's checked status to its children and parents for the given [param column]. It is possible to process the items affected by this method call by connecting to [signal Tree.check_propagated_to_item]. The order that the items affected will be processed is as follows: the item invoking this method, children of that item, and finally parents of that item. If [param emit_signal] is `false`, then [signal Tree.check_propagated_to_item] will not be emitted. */
        propagate_check(column: int64, emit_signal?: boolean /* = true */): void
        
        /** Sets the given column's text value. */
        set_text(column: int64, text: string): void
        
        /** Returns the given column's text. */
        get_text(column: int64): string
        
        /** Sets item's text base writing direction. */
        set_text_direction(column: int64, direction: Control.TextDirection): void
        
        /** Returns item's text base writing direction. */
        get_text_direction(column: int64): Control.TextDirection
        
        /** Sets the autowrap mode in the given [param column]. If set to something other than [constant TextServer.AUTOWRAP_OFF], the text gets wrapped inside the cell's bounding rectangle. */
        set_autowrap_mode(column: int64, autowrap_mode: TextServer.AutowrapMode): void
        
        /** Returns the text autowrap mode in the given [param column]. By default it is [constant TextServer.AUTOWRAP_OFF]. */
        get_autowrap_mode(column: int64): TextServer.AutowrapMode
        
        /** Sets the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. */
        set_text_overrun_behavior(column: int64, overrun_behavior: TextServer.OverrunBehavior): void
        
        /** Returns the clipping behavior when the text exceeds the item's bounding rectangle in the given [param column]. By default it is [constant TextServer.OVERRUN_TRIM_ELLIPSIS]. */
        get_text_overrun_behavior(column: int64): TextServer.OverrunBehavior
        
        /** Set BiDi algorithm override for the structured text. Has effect for cells that display text. */
        set_structured_text_bidi_override(column: int64, parser: TextServer.StructuredTextParser): void
        
        /** Returns the BiDi algorithm override set for this cell. */
        get_structured_text_bidi_override(column: int64): TextServer.StructuredTextParser
        
        /** Set additional options for BiDi override. Has effect for cells that display text. */
        set_structured_text_bidi_override_options(column: int64, args: GArray): void
        
        /** Returns the additional BiDi options set for this cell. */
        get_structured_text_bidi_override_options(column: int64): GArray
        
        /** Sets language code of item's text used for line-breaking and text shaping algorithms, if left empty current locale is used instead. */
        set_language(column: int64, language: string): void
        
        /** Returns item's text language code. */
        get_language(column: int64): string
        
        /** Sets a string to be shown after a column's value (for example, a unit abbreviation). */
        set_suffix(column: int64, text: string): void
        
        /** Gets the suffix string shown after the column value. */
        get_suffix(column: int64): string
        
        /** Sets the given cell's icon [Texture2D]. If the cell is in [constant CELL_MODE_ICON] mode, the icon is displayed in the center of the cell. Otherwise, the icon is displayed before the cell's text. [constant CELL_MODE_RANGE] does not display an icon. */
        set_icon(column: int64, texture: Texture2D): void
        
        /** Returns the given column's icon [Texture2D]. Error if no icon is set. */
        get_icon(column: int64): null | Texture2D
        
        /** Sets the given cell's icon overlay [Texture2D]. The cell has to be in [constant CELL_MODE_ICON] mode, and icon has to be set. Overlay is drawn on top of icon, in the bottom left corner. */
        set_icon_overlay(column: int64, texture: Texture2D): void
        
        /** Returns the given column's icon overlay [Texture2D]. */
        get_icon_overlay(column: int64): null | Texture2D
        
        /** Sets the given column's icon's texture region. */
        set_icon_region(column: int64, region: Rect2): void
        
        /** Returns the icon [Texture2D] region as [Rect2]. */
        get_icon_region(column: int64): Rect2
        
        /** Sets the maximum allowed width of the icon in the given [param column]. This limit is applied on top of the default size of the icon and on top of [theme_item Tree.icon_max_width]. The height is adjusted according to the icon's ratio. */
        set_icon_max_width(column: int64, width: int64): void
        
        /** Returns the maximum allowed width of the icon in the given [param column]. */
        get_icon_max_width(column: int64): int64
        
        /** Modulates the given column's icon with [param modulate]. */
        set_icon_modulate(column: int64, modulate: Color): void
        
        /** Returns the [Color] modulating the column's icon. */
        get_icon_modulate(column: int64): Color
        
        /** Sets the value of a [constant CELL_MODE_RANGE] column. */
        set_range(column: int64, value: float64): void
        
        /** Returns the value of a [constant CELL_MODE_RANGE] column. */
        get_range(column: int64): float64
        
        /** Sets the range of accepted values for a column. The column must be in the [constant CELL_MODE_RANGE] mode.  
         *  If [param expr] is `true`, the edit mode slider will use an exponential scale as with [member Range.exp_edit].  
         */
        set_range_config(column: int64, min: float64, max: float64, step: float64, expr?: boolean /* = false */): void
        
        /** Returns a dictionary containing the range parameters for a given column. The keys are "min", "max", "step", and "expr". */
        get_range_config(column: int64): GDictionary
        
        /** Sets the metadata value for the given column, which can be retrieved later using [method get_metadata]. This can be used, for example, to store a reference to the original data. */
        set_metadata(column: int64, meta: any): void
        
        /** Returns the metadata value that was set for the given column using [method set_metadata]. */
        get_metadata(column: int64): any
        
        /** Sets the given column's custom draw callback to the [param callback] method on [param object].  
         *  The method named [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        set_custom_draw(column: int64, object: Object, callback: StringName): void
        
        /** Sets the given column's custom draw callback. Use an empty [Callable] ([code skip-lint]Callable()`) to clear the custom callback. The cell has to be in [constant CELL_MODE_CUSTOM] to use this feature.  
         *  The [param callback] should accept two arguments: the [TreeItem] that is drawn and its position and size as a [Rect2].  
         */
        set_custom_draw_callback(column: int64, callback: Callable): void
        
        /** Returns the custom callback of column [param column]. */
        get_custom_draw_callback(column: int64): Callable
        
        /** Collapses or uncollapses this [TreeItem] and all the descendants of this item. */
        set_collapsed_recursive(enable: boolean): void
        
        /** Returns `true` if this [TreeItem], or any of its descendants, is collapsed.  
         *  If [param only_visible] is `true` it ignores non-visible [TreeItem]s.  
         */
        is_any_collapsed(only_visible?: boolean /* = false */): boolean
        
        /** Returns `true` if [member visible] is `true` and all its ancestors are also visible. */
        is_visible_in_tree(): boolean
        
        /** Uncollapses all [TreeItem]s necessary to reveal this [TreeItem], i.e. all ancestor [TreeItem]s. */
        uncollapse_tree(): void
        
        /** If [param selectable] is `true`, the given [param column] is selectable. */
        set_selectable(column: int64, selectable: boolean): void
        
        /** Returns `true` if the given [param column] is selectable. */
        is_selectable(column: int64): boolean
        
        /** Returns `true` if the given [param column] is selected. */
        is_selected(column: int64): boolean
        
        /** Selects the given [param column]. */
        select(column: int64): void
        
        /** Deselects the given column. */
        deselect(column: int64): void
        
        /** If [param enabled] is `true`, the given [param column] is editable. */
        set_editable(column: int64, enabled: boolean): void
        
        /** Returns `true` if the given [param column] is editable. */
        is_editable(column: int64): boolean
        
        /** Sets the given column's custom color. */
        set_custom_color(column: int64, color: Color): void
        
        /** Returns the custom color of column [param column]. */
        get_custom_color(column: int64): Color
        
        /** Resets the color for the given column to default. */
        clear_custom_color(column: int64): void
        
        /** Sets custom font used to draw text in the given [param column]. */
        set_custom_font(column: int64, font: Font): void
        
        /** Returns custom font used to draw text in the column [param column]. */
        get_custom_font(column: int64): null | Font
        
        /** Sets custom font size used to draw text in the given [param column]. */
        set_custom_font_size(column: int64, font_size: int64): void
        
        /** Returns custom font size used to draw text in the column [param column]. */
        get_custom_font_size(column: int64): int64
        
        /** Sets the given column's custom background color and whether to just use it as an outline. */
        set_custom_bg_color(column: int64, color: Color, just_outline?: boolean /* = false */): void
        
        /** Resets the background color for the given column to default. */
        clear_custom_bg_color(column: int64): void
        
        /** Returns the custom background color of column [param column]. */
        get_custom_bg_color(column: int64): Color
        
        /** Makes a cell with [constant CELL_MODE_CUSTOM] display as a non-flat button with a [StyleBox]. */
        set_custom_as_button(column: int64, enable: boolean): void
        
        /** Returns `true` if the cell was made into a button with [method set_custom_as_button]. */
        is_custom_set_as_button(column: int64): boolean
        
        /** Removes all buttons from all columns of this item. */
        clear_buttons(): void
        
        /** Adds a button with [Texture2D] [param button] to the end of the cell at column [param column]. The [param id] is used to identify the button in the according [signal Tree.button_clicked] signal and can be different from the buttons index. If not specified, the next available index is used, which may be retrieved by calling [method get_button_count] immediately before this method. Optionally, the button can be [param disabled] and have a [param tooltip_text]. */
        add_button(column: int64, button: Texture2D, id?: int64 /* = -1 */, disabled?: boolean /* = false */, tooltip_text?: string /* = '' */): void
        
        /** Returns the number of buttons in column [param column]. */
        get_button_count(column: int64): int64
        
        /** Returns the tooltip text for the button at index [param button_index] in column [param column]. */
        get_button_tooltip_text(column: int64, button_index: int64): string
        
        /** Returns the ID for the button at index [param button_index] in column [param column]. */
        get_button_id(column: int64, button_index: int64): int64
        
        /** Returns the button index if there is a button with ID [param id] in column [param column], otherwise returns -1. */
        get_button_by_id(column: int64, id: int64): int64
        
        /** Returns the color of the button with ID [param id] in column [param column]. If the specified button does not exist, returns [constant Color.BLACK]. */
        get_button_color(column: int64, id: int64): Color
        
        /** Returns the [Texture2D] of the button at index [param button_index] in column [param column]. */
        get_button(column: int64, button_index: int64): null | Texture2D
        
        /** Sets the tooltip text for the button at index [param button_index] in the given [param column]. */
        set_button_tooltip_text(column: int64, button_index: int64, tooltip: string): void
        
        /** Sets the given column's button [Texture2D] at index [param button_index] to [param button]. */
        set_button(column: int64, button_index: int64, button: Texture2D): void
        
        /** Removes the button at index [param button_index] in column [param column]. */
        erase_button(column: int64, button_index: int64): void
        
        /** If `true`, disables the button at index [param button_index] in the given [param column]. */
        set_button_disabled(column: int64, button_index: int64, disabled: boolean): void
        
        /** Sets the given column's button color at index [param button_index] to [param color]. */
        set_button_color(column: int64, button_index: int64, color: Color): void
        
        /** Returns `true` if the button at index [param button_index] for the given [param column] is disabled. */
        is_button_disabled(column: int64, button_index: int64): boolean
        
        /** Sets the given column's tooltip text. */
        set_tooltip_text(column: int64, tooltip: string): void
        
        /** Returns the given column's tooltip text. */
        get_tooltip_text(column: int64): string
        
        /** Sets the given column's text alignment. See [enum HorizontalAlignment] for possible values. */
        set_text_alignment(column: int64, text_alignment: HorizontalAlignment): void
        
        /** Returns the given column's text alignment. */
        get_text_alignment(column: int64): HorizontalAlignment
        
        /** If [param enable] is `true`, the given [param column] is expanded to the right. */
        set_expand_right(column: int64, enable: boolean): void
        
        /** Returns `true` if `expand_right` is set. */
        get_expand_right(column: int64): boolean
        
        /** Creates an item and adds it as a child.  
         *  The new item will be inserted as position [param index] (the default value `-1` means the last position), or it will be the last child if [param index] is higher than the child count.  
         */
        create_child(index?: int64 /* = -1 */): TreeItem
        
        /** Adds a previously unparented [TreeItem] as a direct child of this one. The [param child] item must not be a part of any [Tree] or parented to any [TreeItem]. See also [method remove_child]. */
        add_child(child: TreeItem): void
        
        /** Removes the given child [TreeItem] and all its children from the [Tree]. Note that it doesn't free the item from memory, so it can be reused later (see [method add_child]). To completely remove a [TreeItem] use [method Object.free].  
         *      
         *  **Note:** If you want to move a child from one [Tree] to another, then instead of removing and adding it manually you can use [method move_before] or [method move_after].  
         */
        remove_child(child: TreeItem): void
        
        /** Returns the [Tree] that owns this TreeItem. */
        get_tree(): null | Tree
        
        /** Returns the next sibling TreeItem in the tree or a `null` object if there is none. */
        get_next(): null | TreeItem
        
        /** Returns the previous sibling TreeItem in the tree or a `null` object if there is none. */
        get_prev(): null | TreeItem
        
        /** Returns the parent TreeItem or a `null` object if there is none. */
        get_parent(): null | TreeItem
        
        /** Returns the TreeItem's first child. */
        get_first_child(): null | TreeItem
        
        /** Returns the next TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first element in the tree when called on the last element, otherwise it returns `null`.  
         */
        get_next_in_tree(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the previous TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        get_prev_in_tree(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the next visible TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the first visible element in the tree when called on the last visible element, otherwise it returns `null`.  
         */
        get_next_visible(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns the previous visible sibling TreeItem in the tree (in the context of a depth-first search) or a `null` object if there is none.  
         *  If [param wrap] is enabled, the method will wrap around to the last visible element in the tree when called on the first visible element, otherwise it returns `null`.  
         */
        get_prev_visible(wrap?: boolean /* = false */): null | TreeItem
        
        /** Returns a child item by its [param index] (see [method get_child_count]). This method is often used for iterating all children of an item.  
         *  Negative indices access the children from the last one.  
         */
        get_child(index: int64): null | TreeItem
        
        /** Returns the number of child items. */
        get_child_count(): int64
        
        /** Returns an array of references to the item's children. */
        get_children(): GArray
        
        /** Returns the node's order in the tree. For example, if called on the first child item the position is `0`. */
        get_index(): int64
        
        /** Moves this TreeItem right before the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        move_before(item: TreeItem): void
        
        /** Moves this TreeItem right after the given [param item].  
         *      
         *  **Note:** You can't move to the root or move the root.  
         */
        move_after(item: TreeItem): void
        
        /** Calls the [param method] on the actual TreeItem and its children recursively. Pass parameters as a comma separated list. */
        call_recursive(method: StringName, ...varargs: any[]): void
        
        /** If `true`, the TreeItem is collapsed. */
        get collapsed(): boolean
        set collapsed(value: boolean)
        
        /** If `true`, the [TreeItem] is visible (default).  
         *  Note that if a [TreeItem] is set to not be visible, none of its children will be visible either.  
         */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, folding is disabled for this TreeItem. */
        get disable_folding(): boolean
        set disable_folding(value: boolean)
        
        /** The custom minimum height. */
        get custom_minimum_height(): int64
        set custom_minimum_height(value: int64)
    }
    /** Internal mesh type.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_trianglemesh.html  
     */
    class TriangleMesh extends RefCounted {
        constructor(identifier?: any)
    }
    /** Represents a straight tube-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_tubetrailmesh.html  
     */
    class TubeTrailMesh extends PrimitiveMesh {
        constructor(identifier?: any)
        /** The baseline radius of the tube. The radius of a particular section ring is obtained by multiplying this radius by the value of the [member curve] at the given distance. */
        get radius(): float64
        set radius(value: float64)
        
        /** The number of sides on the tube. For example, a value of `5` means the tube will be pentagonal. Higher values result in a more detailed tube at the cost of performance. */
        get radial_steps(): int64
        set radial_steps(value: int64)
        
        /** The total number of sections on the tube. */
        get sections(): int64
        set sections(value: int64)
        
        /** The length of a section of the tube. */
        get section_length(): float64
        set section_length(value: float64)
        
        /** The number of rings in a section. The [member curve] is sampled on each ring to determine its radius. Higher values result in a more detailed tube at the cost of performance. */
        get section_rings(): int64
        set section_rings(value: int64)
        
        /** If `true`, generates a cap at the top of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get cap_top(): boolean
        set cap_top(value: boolean)
        
        /** If `true`, generates a cap at the bottom of the tube. This can be set to `false` to speed up generation and rendering when the cap is never seen by the camera. */
        get cap_bottom(): boolean
        set cap_bottom(value: boolean)
        
        /** Determines the radius of the tube along its length. The radius of a particular section ring is obtained by multiplying the baseline [member radius] by the value of this curve at the given distance. For values smaller than `0`, the faces will be inverted. Should be a unit [Curve]. */
        get curve(): null | Curve
        set curve(value: null | Curve)
    }
    namespace Tween {
        enum TweenProcessMode {
            /** The [Tween] updates after each physics frame (see [method Node._physics_process]). */
            TWEEN_PROCESS_PHYSICS = 0,
            
            /** The [Tween] updates after each process frame (see [method Node._process]). */
            TWEEN_PROCESS_IDLE = 1,
        }
        enum TweenPauseMode {
            /** If the [Tween] has a bound node, it will process when that node can process (see [member Node.process_mode]). Otherwise it's the same as [constant TWEEN_PAUSE_STOP]. */
            TWEEN_PAUSE_BOUND = 0,
            
            /** If [SceneTree] is paused, the [Tween] will also pause. */
            TWEEN_PAUSE_STOP = 1,
            
            /** The [Tween] will process regardless of whether [SceneTree] is paused. */
            TWEEN_PAUSE_PROCESS = 2,
        }
        enum TransitionType {
            /** The animation is interpolated linearly. */
            TRANS_LINEAR = 0,
            
            /** The animation is interpolated using a sine function. */
            TRANS_SINE = 1,
            
            /** The animation is interpolated with a quintic (to the power of 5) function. */
            TRANS_QUINT = 2,
            
            /** The animation is interpolated with a quartic (to the power of 4) function. */
            TRANS_QUART = 3,
            
            /** The animation is interpolated with a quadratic (to the power of 2) function. */
            TRANS_QUAD = 4,
            
            /** The animation is interpolated with an exponential (to the power of x) function. */
            TRANS_EXPO = 5,
            
            /** The animation is interpolated with elasticity, wiggling around the edges. */
            TRANS_ELASTIC = 6,
            
            /** The animation is interpolated with a cubic (to the power of 3) function. */
            TRANS_CUBIC = 7,
            
            /** The animation is interpolated with a function using square roots. */
            TRANS_CIRC = 8,
            
            /** The animation is interpolated by bouncing at the end. */
            TRANS_BOUNCE = 9,
            
            /** The animation is interpolated backing out at ends. */
            TRANS_BACK = 10,
            
            /** The animation is interpolated like a spring towards the end. */
            TRANS_SPRING = 11,
        }
        enum EaseType {
            /** The interpolation starts slowly and speeds up towards the end. */
            EASE_IN = 0,
            
            /** The interpolation starts quickly and slows down towards the end. */
            EASE_OUT = 1,
            
            /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is slowest at both ends. */
            EASE_IN_OUT = 2,
            
            /** A combination of [constant EASE_IN] and [constant EASE_OUT]. The interpolation is fastest at both ends. */
            EASE_OUT_IN = 3,
        }
    }
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_tween.html  
     */
    class Tween extends RefCounted {
        constructor(identifier?: any)
        /** Creates and appends a [PropertyTweener]. This method tweens a [param property] of an [param object] between an initial value and [param final_val] in a span of time equal to [param duration], in seconds. The initial value by default is the property's value at the time the tweening of the [PropertyTweener] starts.  
         *    
         *  will move the sprite to position (100, 200) and then to (200, 300). If you use [method PropertyTweener.from] or [method PropertyTweener.from_current], the starting position will be overwritten by the given value instead. See other methods in [PropertyTweener] to see how the tweening can be tweaked further.  
         *      
         *  **Note:** You can find the correct property name by hovering over the property in the Inspector. You can also provide the components of a property directly by using `"property:component"` (eg. `position:x`), where it would only apply to that particular component.  
         *  **Example:** Moving an object twice from the same position, with different transition types:  
         *    
         */
        tween_property(object: Object, property: NodePath | string, final_val: any, duration: float64): null | PropertyTweener
        
        /** Creates and appends an [IntervalTweener]. This method can be used to create delays in the tween animation, as an alternative to using the delay in other [Tweener]s, or when there's no animation (in which case the [Tween] acts as a timer). [param time] is the length of the interval, in seconds.  
         *  **Example:** Creating an interval in code execution:  
         *    
         *  **Example:** Creating an object that moves back and forth and jumps every few seconds:  
         *    
         */
        tween_interval(time: float64): null | IntervalTweener
        
        /** Creates and appends a [CallbackTweener]. This method can be used to call an arbitrary method in any object. Use [method Callable.bind] to bind additional arguments for the call.  
         *  **Example:** Object that keeps shooting every 1 second:  
         *    
         *  **Example:** Turning a sprite red and then blue, with 2 second delay:  
         *    
         */
        tween_callback(callback: Callable): null | CallbackTweener
        
        /** Creates and appends a [MethodTweener]. This method is similar to a combination of [method tween_callback] and [method tween_property]. It calls a method over time with a tweened value provided as an argument. The value is tweened between [param from] and [param to] over the time specified by [param duration], in seconds. Use [method Callable.bind] to bind additional arguments for the call. You can use [method MethodTweener.set_ease] and [method MethodTweener.set_trans] to tweak the easing and transition of the value or [method MethodTweener.set_delay] to delay the tweening.  
         *  **Example:** Making a 3D object look from one point to another point:  
         *    
         *  **Example:** Setting the text of a [Label], using an intermediate method and after a delay:  
         *    
         */
        tween_method(method: Callable, from: any, to: any, duration: float64): null | MethodTweener
        
        /** Creates and appends a [SubtweenTweener]. This method can be used to nest [param subtween] within this [Tween], allowing for the creation of more complex and composable sequences.  
         *    
         *      
         *  **Note:** The methods [method pause], [method stop], and [method set_loops] can cause the parent [Tween] to get stuck on the subtween step; see the documentation for those methods for more information.  
         *      
         *  **Note:** The pause and process modes set by [method set_pause_mode] and [method set_process_mode] on [param subtween] will be overridden by the parent [Tween]'s settings.  
         */
        tween_subtween(subtween: Tween): null | SubtweenTweener
        
        /** Processes the [Tween] by the given [param delta] value, in seconds. This is mostly useful for manual control when the [Tween] is paused. It can also be used to end the [Tween] animation immediately, by setting [param delta] longer than the whole duration of the [Tween] animation.  
         *  Returns `true` if the [Tween] still has [Tweener]s that haven't finished.  
         */
        custom_step(delta: float64): boolean
        
        /** Stops the tweening and resets the [Tween] to its initial state. This will not remove any appended [Tweener]s.  
         *      
         *  **Note:** This does  *not*  reset targets of [PropertyTweener]s to their values when the [Tween] first started.  
         *    
         *      
         *  **Note:** If a Tween is stopped and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        stop(): void
        
        /** Pauses the tweening. The animation can be resumed by using [method play].  
         *      
         *  **Note:** If a Tween is paused and not bound to any node, it will exist indefinitely until manually started or invalidated. If you lose a reference to such Tween, you can retrieve it using [method SceneTree.get_processed_tweens].  
         */
        pause(): void
        
        /** Resumes a paused or stopped [Tween]. */
        play(): void
        
        /** Aborts all tweening operations and invalidates the [Tween]. */
        kill(): void
        
        /** Returns the total time in seconds the [Tween] has been animating (i.e. the time since it started, not counting pauses etc.). The time is affected by [method set_speed_scale], and [method stop] will reset it to `0`.  
         *      
         *  **Note:** As it results from accumulating frame deltas, the time returned after the [Tween] has finished animating will be slightly greater than the actual [Tween] duration.  
         */
        get_total_elapsed_time(): float64
        
        /** Returns whether the [Tween] is currently running, i.e. it wasn't paused and it's not finished. */
        is_running(): boolean
        
        /** Returns whether the [Tween] is valid. A valid [Tween] is a [Tween] contained by the scene tree (i.e. the array from [method SceneTree.get_processed_tweens] will contain this [Tween]). A [Tween] might become invalid when it has finished tweening, is killed, or when created with `Tween.new()`. Invalid [Tween]s can't have [Tweener]s appended. */
        is_valid(): boolean
        
        /** Binds this [Tween] with the given [param node]. [Tween]s are processed directly by the [SceneTree], so they run independently of the animated nodes. When you bind a [Node] with the [Tween], the [Tween] will halt the animation when the object is not inside tree and the [Tween] will be automatically killed when the bound object is freed. Also [constant TWEEN_PAUSE_BOUND] will make the pausing behavior dependent on the bound node.  
         *  For a shorter way to create and bind a [Tween], you can use [method Node.create_tween].  
         */
        bind_node(node: Node): null | Tween
        
        /** Determines whether the [Tween] should run after process frames (see [method Node._process]) or physics frames (see [method Node._physics_process]).  
         *  Default value is [constant TWEEN_PROCESS_IDLE].  
         */
        set_process_mode(mode: Tween.TweenProcessMode): null | Tween
        
        /** Determines the behavior of the [Tween] when the [SceneTree] is paused. Check [enum TweenPauseMode] for options.  
         *  Default value is [constant TWEEN_PAUSE_BOUND].  
         */
        set_pause_mode(mode: Tween.TweenPauseMode): null | Tween
        
        /** If [param ignore] is `true`, the tween will ignore [member Engine.time_scale] and update with the real, elapsed time. This affects all [Tweener]s and their delays. Default value is `false`. */
        set_ignore_time_scale(ignore?: boolean /* = true */): null | Tween
        
        /** If [param parallel] is `true`, the [Tweener]s appended after this method will by default run simultaneously, as opposed to sequentially.  
         *      
         *  **Note:** Just like with [method parallel], the tweener added right before this method will also be part of the parallel step.  
         *    
         */
        set_parallel(parallel?: boolean /* = true */): null | Tween
        
        /** Sets the number of times the tweening sequence will be repeated, i.e. `set_loops(2)` will run the animation twice.  
         *  Calling this method without arguments will make the [Tween] run infinitely, until either it is killed with [method kill], the [Tween]'s bound node is freed, or all the animated objects have been freed (which makes further animation impossible).  
         *  **Warning:** Make sure to always add some duration/delay when using infinite loops. To prevent the game freezing, 0-duration looped animations (e.g. a single [CallbackTweener] with no delay) are stopped after a small number of loops, which may produce unexpected results. If a [Tween]'s lifetime depends on some node, always use [method bind_node].  
         */
        set_loops(loops?: int64 /* = 0 */): null | Tween
        
        /** Returns the number of remaining loops for this [Tween] (see [method set_loops]). A return value of `-1` indicates an infinitely looping [Tween], and a return value of `0` indicates that the [Tween] has already finished. */
        get_loops_left(): int64
        
        /** Scales the speed of tweening. This affects all [Tweener]s and their delays. */
        set_speed_scale(speed: float64): null | Tween
        
        /** Sets the default transition type for [PropertyTweener]s and [MethodTweener]s appended after this method.  
         *  Before this method is called, the default transition type is [constant TRANS_LINEAR].  
         *    
         */
        set_trans(trans: Tween.TransitionType): null | Tween
        
        /** Sets the default ease type for [PropertyTweener]s and [MethodTweener]s appended after this method.  
         *  Before this method is called, the default ease type is [constant EASE_IN_OUT].  
         *    
         */
        set_ease(ease: Tween.EaseType): null | Tween
        
        /** Makes the next [Tweener] run parallelly to the previous one.  
         *    
         *  All [Tweener]s in the example will run at the same time.  
         *  You can make the [Tween] parallel by default by using [method set_parallel].  
         */
        parallel(): null | Tween
        
        /** Used to chain two [Tweener]s after [method set_parallel] is called with `true`.  
         *    
         */
        chain(): null | Tween
        
        /** This method can be used for manual interpolation of a value, when you don't want [Tween] to do animating for you. It's similar to [method @GlobalScope.lerp], but with support for custom transition and easing.  
         *  [param initial_value] is the starting value of the interpolation.  
         *  [param delta_value] is the change of the value in the interpolation, i.e. it's equal to `final_value - initial_value`.  
         *  [param elapsed_time] is the time in seconds that passed after the interpolation started and it's used to control the position of the interpolation. E.g. when it's equal to half of the [param duration], the interpolated value will be halfway between initial and final values. This value can also be greater than [param duration] or lower than 0, which will extrapolate the value.  
         *  [param duration] is the total time of the interpolation.  
         *      
         *  **Note:** If [param duration] is equal to `0`, the method will always return the final value, regardless of [param elapsed_time] provided.  
         */
        static interpolate_value(initial_value: any, delta_value: any, elapsed_time: float64, duration: float64, trans_type: Tween.TransitionType, ease_type: Tween.EaseType): any
        
        /** Emitted when one step of the [Tween] is complete, providing the step index. One step is either a single [Tweener] or a group of [Tweener]s running in parallel. */
        readonly step_finished: Signal<(idx: int64) => void>
        
        /** Emitted when a full loop is complete (see [method set_loops]), providing the loop index. This signal is not emitted after the final loop, use [signal finished] instead for this case. */
        readonly loop_finished: Signal<(loop_count: int64) => void>
        
        /** Emitted when the [Tween] has finished all tweening. Never emitted when the [Tween] is set to infinite looping (see [method set_loops]). */
        readonly finished: Signal<() => void>
    }
    /** Abstract class for all Tweeners used by [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_tweener.html  
     */
    class Tweener extends RefCounted {
        constructor(identifier?: any)
        /** Emitted when the [Tweener] has just finished its job or became invalid (e.g. due to a freed object). */
        readonly finished: Signal<() => void>
    }
    /** Helper class to implement a UDP server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_udpserver.html  
     */
    class UDPServer extends RefCounted {
        constructor(identifier?: any)
        /** Starts the server by opening a UDP socket listening on the given [param port]. You can optionally specify a [param bind_address] to only listen for packets sent to that address. See also [method PacketPeerUDP.bind]. */
        listen(port: int64, bind_address?: string /* = '*' */): Error
        
        /** Call this method at regular intervals (e.g. inside [method Node._process]) to process new packets. And packet from known address/port pair will be delivered to the appropriate [PacketPeerUDP], any packet received from an unknown address/port pair will be added as a pending connection (see [method is_connection_available], [method take_connection]). The maximum number of pending connection is defined via [member max_pending_connections]. */
        poll(): Error
        
        /** Returns `true` if a packet with a new address/port combination was received on the socket. */
        is_connection_available(): boolean
        
        /** Returns the local port this server is listening to. */
        get_local_port(): int64
        
        /** Returns `true` if the socket is open and listening on a port. */
        is_listening(): boolean
        
        /** Returns the first pending connection (connected to the appropriate address/port). Will return `null` if no new connection is available. See also [method is_connection_available], [method PacketPeerUDP.connect_to_host]. */
        take_connection(): null | PacketPeerUDP
        
        /** Stops the server, closing the UDP socket if open. Will close all connected [PacketPeerUDP] accepted via [method take_connection] (remote peers will not be notified). */
        stop(): void
        
        /** Define the maximum number of pending connections, during [method poll], any new pending connection exceeding that value will be automatically dropped. Setting this value to `0` effectively prevents any new pending connection to be accepted (e.g. when all your players have connected). */
        get max_pending_connections(): int64
        set max_pending_connections(value: int64)
    }
    namespace UPNP {
        enum UPNPResult {
            /** UPNP command or discovery was successful. */
            UPNP_RESULT_SUCCESS = 0,
            
            /** Not authorized to use the command on the [UPNPDevice]. May be returned when the user disabled UPNP on their router. */
            UPNP_RESULT_NOT_AUTHORIZED = 1,
            
            /** No port mapping was found for the given port, protocol combination on the given [UPNPDevice]. */
            UPNP_RESULT_PORT_MAPPING_NOT_FOUND = 2,
            
            /** Inconsistent parameters. */
            UPNP_RESULT_INCONSISTENT_PARAMETERS = 3,
            
            /** No such entry in array. May be returned if a given port, protocol combination is not found on an [UPNPDevice]. */
            UPNP_RESULT_NO_SUCH_ENTRY_IN_ARRAY = 4,
            
            /** The action failed. */
            UPNP_RESULT_ACTION_FAILED = 5,
            
            /** The [UPNPDevice] does not allow wildcard values for the source IP address. */
            UPNP_RESULT_SRC_IP_WILDCARD_NOT_PERMITTED = 6,
            
            /** The [UPNPDevice] does not allow wildcard values for the external port. */
            UPNP_RESULT_EXT_PORT_WILDCARD_NOT_PERMITTED = 7,
            
            /** The [UPNPDevice] does not allow wildcard values for the internal port. */
            UPNP_RESULT_INT_PORT_WILDCARD_NOT_PERMITTED = 8,
            
            /** The remote host value must be a wildcard. */
            UPNP_RESULT_REMOTE_HOST_MUST_BE_WILDCARD = 9,
            
            /** The external port value must be a wildcard. */
            UPNP_RESULT_EXT_PORT_MUST_BE_WILDCARD = 10,
            
            /** No port maps are available. May also be returned if port mapping functionality is not available. */
            UPNP_RESULT_NO_PORT_MAPS_AVAILABLE = 11,
            
            /** Conflict with other mechanism. May be returned instead of [constant UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING] if a port mapping conflicts with an existing one. */
            UPNP_RESULT_CONFLICT_WITH_OTHER_MECHANISM = 12,
            
            /** Conflict with an existing port mapping. */
            UPNP_RESULT_CONFLICT_WITH_OTHER_MAPPING = 13,
            
            /** External and internal port values must be the same. */
            UPNP_RESULT_SAME_PORT_VALUES_REQUIRED = 14,
            
            /** Only permanent leases are supported. Do not use the `duration` parameter when adding port mappings. */
            UPNP_RESULT_ONLY_PERMANENT_LEASE_SUPPORTED = 15,
            
            /** Invalid gateway. */
            UPNP_RESULT_INVALID_GATEWAY = 16,
            
            /** Invalid port. */
            UPNP_RESULT_INVALID_PORT = 17,
            
            /** Invalid protocol. */
            UPNP_RESULT_INVALID_PROTOCOL = 18,
            
            /** Invalid duration. */
            UPNP_RESULT_INVALID_DURATION = 19,
            
            /** Invalid arguments. */
            UPNP_RESULT_INVALID_ARGS = 20,
            
            /** Invalid response. */
            UPNP_RESULT_INVALID_RESPONSE = 21,
            
            /** Invalid parameter. */
            UPNP_RESULT_INVALID_PARAM = 22,
            
            /** HTTP error. */
            UPNP_RESULT_HTTP_ERROR = 23,
            
            /** Socket error. */
            UPNP_RESULT_SOCKET_ERROR = 24,
            
            /** Error allocating memory. */
            UPNP_RESULT_MEM_ALLOC_ERROR = 25,
            
            /** No gateway available. You may need to call [method discover] first, or discovery didn't detect any valid IGDs (InternetGatewayDevices). */
            UPNP_RESULT_NO_GATEWAY = 26,
            
            /** No devices available. You may need to call [method discover] first, or discovery didn't detect any valid [UPNPDevice]s. */
            UPNP_RESULT_NO_DEVICES = 27,
            
            /** Unknown error. */
            UPNP_RESULT_UNKNOWN_ERROR = 28,
        }
    }
    /** Universal Plug and Play (UPnP) functions for network device discovery, querying and port forwarding.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_upnp.html  
     */
    class UPNP extends RefCounted {
        constructor(identifier?: any)
        /** Returns the number of discovered [UPNPDevice]s. */
        get_device_count(): int64
        
        /** Returns the [UPNPDevice] at the given [param index]. */
        get_device(index: int64): null | UPNPDevice
        
        /** Adds the given [UPNPDevice] to the list of discovered devices. */
        add_device(device: UPNPDevice): void
        
        /** Sets the device at [param index] from the list of discovered devices to [param device]. */
        set_device(index: int64, device: UPNPDevice): void
        
        /** Removes the device at [param index] from the list of discovered devices. */
        remove_device(index: int64): void
        
        /** Clears the list of discovered devices. */
        clear_devices(): void
        
        /** Returns the default gateway. That is the first discovered [UPNPDevice] that is also a valid IGD (InternetGatewayDevice). */
        get_gateway(): null | UPNPDevice
        
        /** Discovers local [UPNPDevice]s. Clears the list of previously discovered devices.  
         *  Filters for IGD (InternetGatewayDevice) type devices by default, as those manage port forwarding. [param timeout] is the time to wait for responses in milliseconds. [param ttl] is the time-to-live; only touch this if you know what you're doing.  
         *  See [enum UPNPResult] for possible return values.  
         */
        discover(timeout?: int64 /* = 2000 */, ttl?: int64 /* = 2 */, device_filter?: string /* = 'InternetGatewayDevice' */): int64
        
        /** Returns the external [IP] address of the default gateway (see [method get_gateway]) as string. Returns an empty string on error. */
        query_external_address(): string
        
        /** Adds a mapping to forward the external [param port] (between 1 and 65535, although recommended to use port 1024 or above) on the default gateway (see [method get_gateway]) to the [param port_internal] on the local machine for the given protocol [param proto] (either `"TCP"` or `"UDP"`, with UDP being the default). If a port mapping for the given port and protocol combination already exists on that gateway device, this method tries to overwrite it. If that is not desired, you can retrieve the gateway manually with [method get_gateway] and call [method add_port_mapping] on it, if any. Note that forwarding a well-known port (below 1024) with UPnP may fail depending on the device.  
         *  Depending on the gateway device, if a mapping for that port already exists, it will either be updated or it will refuse this command due to that conflict, especially if the existing mapping for that port wasn't created via UPnP or points to a different network address (or device) than this one.  
         *  If [param port_internal] is `0` (the default), the same port number is used for both the external and the internal port (the [param port] value).  
         *  The description ([param desc]) is shown in some routers management UIs and can be used to point out which application added the mapping.  
         *  The mapping's lease [param duration] can be limited by specifying a duration in seconds. The default of `0` means no duration, i.e. a permanent lease and notably some devices only support these permanent leases. Note that whether permanent or not, this is only a request and the gateway may still decide at any point to remove the mapping (which usually happens on a reboot of the gateway, when its external IP address changes, or on some models when it detects a port mapping has become inactive, i.e. had no traffic for multiple minutes). If not `0` (permanent), the allowed range according to spec is between `120` (2 minutes) and `86400` seconds (24 hours).  
         *  See [enum UPNPResult] for possible return values.  
         */
        add_port_mapping(port: int64, port_internal?: int64 /* = 0 */, desc?: string /* = '' */, proto?: string /* = 'UDP' */, duration?: int64 /* = 0 */): int64
        
        /** Deletes the port mapping for the given port and protocol combination on the default gateway (see [method get_gateway]) if one exists. [param port] must be a valid port between 1 and 65535, [param proto] can be either `"TCP"` or `"UDP"`. May be refused for mappings pointing to addresses other than this one, for well-known ports (below 1024), or for mappings not added via UPnP. See [enum UPNPResult] for possible return values. */
        delete_port_mapping(port: int64, proto?: string /* = 'UDP' */): int64
        
        /** Multicast interface to use for discovery. Uses the default multicast interface if empty. */
        get discover_multicast_if(): string
        set discover_multicast_if(value: string)
        
        /** If `0`, the local port to use for discovery is chosen automatically by the system. If `1`, discovery will be done from the source port 1900 (same as destination port). Otherwise, the value will be used as the port. */
        get discover_local_port(): int64
        set discover_local_port(value: int64)
        
        /** If `true`, IPv6 is used for [UPNPDevice] discovery. */
        get discover_ipv6(): boolean
        set discover_ipv6(value: boolean)
    }
    namespace UPNPDevice {
        enum IGDStatus {
            /** OK. */
            IGD_STATUS_OK = 0,
            
            /** HTTP error. */
            IGD_STATUS_HTTP_ERROR = 1,
            
            /** Empty HTTP response. */
            IGD_STATUS_HTTP_EMPTY = 2,
            
            /** Returned response contained no URLs. */
            IGD_STATUS_NO_URLS = 3,
            
            /** Not a valid IGD. */
            IGD_STATUS_NO_IGD = 4,
            
            /** Disconnected. */
            IGD_STATUS_DISCONNECTED = 5,
            
            /** Unknown device. */
            IGD_STATUS_UNKNOWN_DEVICE = 6,
            
            /** Invalid control. */
            IGD_STATUS_INVALID_CONTROL = 7,
            
            /** Memory allocation error. */
            IGD_STATUS_MALLOC_ERROR = 8,
            
            /** Unknown error. */
            IGD_STATUS_UNKNOWN_ERROR = 9,
        }
    }
    /** Universal Plug and Play (UPnP) device.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_upnpdevice.html  
     */
    class UPNPDevice extends RefCounted {
        constructor(identifier?: any)
        /** Returns `true` if this is a valid IGD (InternetGatewayDevice) which potentially supports port forwarding. */
        is_valid_gateway(): boolean
        
        /** Returns the external IP address of this [UPNPDevice] or an empty string. */
        query_external_address(): string
        
        /** Adds a port mapping to forward the given external port on this [UPNPDevice] for the given protocol to the local machine. See [method UPNP.add_port_mapping]. */
        add_port_mapping(port: int64, port_internal?: int64 /* = 0 */, desc?: string /* = '' */, proto?: string /* = 'UDP' */, duration?: int64 /* = 0 */): int64
        
        /** Deletes the port mapping identified by the given port and protocol combination on this device. See [method UPNP.delete_port_mapping]. */
        delete_port_mapping(port: int64, proto?: string /* = 'UDP' */): int64
        
        /** URL to the device description. */
        get description_url(): string
        set description_url(value: string)
        
        /** Service type. */
        get service_type(): string
        set service_type(value: string)
        
        /** IDG control URL. */
        get igd_control_url(): string
        set igd_control_url(value: string)
        
        /** IGD service type. */
        get igd_service_type(): string
        set igd_service_type(value: string)
        
        /** Address of the local machine in the network connecting it to this [UPNPDevice]. */
        get igd_our_addr(): string
        set igd_our_addr(value: string)
        
        /** IGD status. See [enum IGDStatus]. */
        get igd_status(): int64
        set igd_status(value: int64)
    }
    namespace UndoRedo {
        enum MergeMode {
            /** Makes "do"/"undo" operations stay in separate actions. */
            MERGE_DISABLE = 0,
            
            /** Merges this action with the previous one if they have the same name. Keeps only the first action's "undo" operations and the last action's "do" operations. Useful for sequential changes to a single value. */
            MERGE_ENDS = 1,
            
            /** Merges this action with the previous one if they have the same name. */
            MERGE_ALL = 2,
        }
    }
    /** Provides a high-level interface for implementing undo and redo operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_undoredo.html  
     */
    class UndoRedo extends Object {
        constructor(identifier?: any)
        /** Create a new action. After this is called, do all your calls to [method add_do_method], [method add_undo_method], [method add_do_property], and [method add_undo_property], then commit the action with [method commit_action].  
         *  The way actions are merged is dictated by [param merge_mode]. See [enum MergeMode] for details.  
         *  The way undo operation are ordered in actions is dictated by [param backward_undo_ops]. When [param backward_undo_ops] is `false` undo option are ordered in the same order they were added. Which means the first operation to be added will be the first to be undone.  
         */
        create_action(name: string, merge_mode?: UndoRedo.MergeMode /* = 0 */, backward_undo_ops?: boolean /* = false */): void
        
        /** Commit the action. If [param execute] is `true` (which it is by default), all "do" methods/properties are called/set when this function is called. */
        commit_action(execute?: boolean /* = true */): void
        
        /** Returns `true` if the [UndoRedo] is currently committing the action, i.e. running its "do" method or property change (see [method commit_action]). */
        is_committing_action(): boolean
        
        /** Register a [Callable] that will be called when the action is committed. */
        add_do_method(callable: Callable): void
        
        /** Register a [Callable] that will be called when the action is undone. */
        add_undo_method(callable: Callable): void
        
        /** Register a [param property] that would change its value to [param value] when the action is committed. */
        add_do_property(object: Object, property: StringName, value: any): void
        
        /** Register a [param property] that would change its value to [param value] when the action is undone. */
        add_undo_property(object: Object, property: StringName, value: any): void
        
        /** Register a reference to an object that will be erased if the "do" history is deleted. This is useful for objects added by the "do" action and removed by the "undo" action.  
         *  When the "do" history is deleted, if the object is a [RefCounted], it will be unreferenced. Otherwise, it will be freed. Do not use for resources.  
         *    
         */
        add_do_reference(object: Object): void
        
        /** Register a reference to an object that will be erased if the "undo" history is deleted. This is useful for objects added by the "undo" action and removed by the "do" action.  
         *  When the "undo" history is deleted, if the object is a [RefCounted], it will be unreferenced. Otherwise, it will be freed. Do not use for resources.  
         *    
         */
        add_undo_reference(object: Object): void
        
        /** Marks the next "do" and "undo" operations to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. Return to normal operation using [method end_force_keep_in_merge_ends]. */
        start_force_keep_in_merge_ends(): void
        
        /** Stops marking operations as to be processed even if the action gets merged with another in the [constant MERGE_ENDS] mode. See [method start_force_keep_in_merge_ends]. */
        end_force_keep_in_merge_ends(): void
        
        /** Returns how many elements are in the history. */
        get_history_count(): int64
        
        /** Gets the index of the current action. */
        get_current_action(): int64
        
        /** Gets the action name from its index. */
        get_action_name(id: int64): string
        
        /** Clear the undo/redo history and associated references.  
         *  Passing `false` to [param increase_version] will prevent the version number from increasing when the history is cleared.  
         */
        clear_history(increase_version?: boolean /* = true */): void
        
        /** Gets the name of the current action, equivalent to `get_action_name(get_current_action())`. */
        get_current_action_name(): string
        
        /** Returns `true` if an "undo" action is available. */
        has_undo(): boolean
        
        /** Returns `true` if a "redo" action is available. */
        has_redo(): boolean
        
        /** Gets the version. Every time a new action is committed, the [UndoRedo]'s version number is increased automatically.  
         *  This is useful mostly to check if something changed from a saved version.  
         */
        get_version(): int64
        
        /** Redo the last action. */
        redo(): boolean
        
        /** Undo the last action. */
        undo(): boolean
        
        /** The maximum number of steps that can be stored in the undo/redo history. If the number of stored steps exceeds this limit, older steps are removed from history and can no longer be reached by calling [method undo]. A value of `0` or lower means no limit. */
        get max_steps(): int64
        set max_steps(value: int64)
        
        /** Called when [method undo] or [method redo] was called. */
        readonly version_changed: Signal<() => void>
    }
    /** Uniform set cache manager for Rendering Device based renderers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_uniformsetcacherd.html  
     */
    class UniformSetCacheRD extends Object {
        constructor(identifier?: any)
        /** Creates/returns a cached uniform set based on the provided uniforms for a given shader. */
        static get_cache(shader: RID, set: int64, uniforms: GArray): RID
    }
    /** A container that arranges its child controls vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vboxcontainer.html  
     */
    class VBoxContainer<Map extends NodePathMap = any> extends BoxContainer<Map> {
        constructor(identifier?: any)
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vflowcontainer.html  
     */
    class VFlowContainer<Map extends NodePathMap = any> extends FlowContainer<Map> {
        constructor(identifier?: any)
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vscrollbar.html  
     */
    class VScrollBar<Map extends NodePathMap = any> extends ScrollBar<Map> {
        constructor(identifier?: any)
    }
    /** A vertical line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vseparator.html  
     */
    class VSeparator<Map extends NodePathMap = any> extends Separator<Map> {
        constructor(identifier?: any)
    }
    /** A vertical slider that goes from bottom (min) to top (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vslider.html  
     */
    class VSlider<Map extends NodePathMap = any> extends Slider<Map> {
        constructor(identifier?: any)
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vsplitcontainer.html  
     */
    class VSplitContainer<Map extends NodePathMap = any> extends SplitContainer<Map> {
        constructor(identifier?: any)
    }
    /** A 3D physics body that simulates the behavior of a car.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vehiclebody3d.html  
     */
    class VehicleBody3D<Map extends NodePathMap = any> extends RigidBody3D<Map> {
        constructor(identifier?: any)
        /** Accelerates the vehicle by applying an engine force. The vehicle is only sped up if the wheels that have [member VehicleWheel3D.use_as_traction] set to `true` and are in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the vehicle reversing.  
         */
        get engine_force(): float64
        set engine_force(value: float64)
        
        /** Slows down the vehicle by applying a braking force. The vehicle is only slowed down if the wheels are in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the vehicle. Setting this to a non-zero value will result in the vehicle turning when it's moving. Wheels that have [member VehicleWheel3D.use_as_steering] set to `true` will automatically be rotated.  
         *      
         *  **Note:** This property is edited in the inspector in degrees. In code the property is set in radians.  
         */
        get steering(): float64
        set steering(value: float64)
    }
    /** A 3D physics body for a [VehicleBody3D] that simulates the behavior of a wheel.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vehiclewheel3d.html  
     */
    class VehicleWheel3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if this wheel is in contact with a surface. */
        is_in_contact(): boolean
        
        /** Returns the contacting body node if valid in the tree, as [Node3D]. At the moment, [GridMap] is not supported so the node will be always of type [PhysicsBody3D].  
         *  Returns `null` if the wheel is not in contact with a surface, or the contact body is not a [PhysicsBody3D].  
         */
        get_contact_body(): null | Node3D
        
        /** Returns the point of the suspension's collision in world space if the wheel is in contact. If the wheel isn't in contact with anything, returns the maximum point of the wheel's ray cast in world space, which is defined by `wheel_rest_length + wheel_radius`. */
        get_contact_point(): Vector3
        
        /** Returns the normal of the suspension's collision in world space if the wheel is in contact. If the wheel isn't in contact with anything, returns a vector pointing directly along the suspension axis toward the vehicle in world space. */
        get_contact_normal(): Vector3
        
        /** Returns a value between 0.0 and 1.0 that indicates whether this wheel is skidding. 0.0 is skidding (the wheel has lost grip, e.g. icy terrain), 1.0 means not skidding (the wheel has full grip, e.g. dry asphalt road). */
        get_skidinfo(): float64
        
        /** Returns the rotational speed of the wheel in revolutions per minute. */
        get_rpm(): float64
        
        /** Accelerates the wheel by applying an engine force. The wheel is only sped up if it is in contact with a surface. The [member RigidBody3D.mass] of the vehicle has an effect on the acceleration of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 50 range for acceleration.  
         *      
         *  **Note:** The simulation does not take the effect of gears into account, you will need to add logic for this if you wish to simulate gears.  
         *  A negative value will result in the wheel reversing.  
         */
        get engine_force(): float64
        set engine_force(value: float64)
        
        /** Slows down the wheel by applying a braking force. The wheel is only slowed down if it is in contact with a surface. The force you need to apply to adequately slow down your vehicle depends on the [member RigidBody3D.mass] of the vehicle. For a vehicle with a mass set to 1000, try a value in the 25 - 30 range for hard braking. */
        get brake(): float64
        set brake(value: float64)
        
        /** The steering angle for the wheel, in radians. Setting this to a non-zero value will result in the vehicle turning when it's moving. */
        get steering(): float64
        set steering(value: float64)
        
        /** If `true`, this wheel transfers engine force to the ground to propel the vehicle forward. This value is used in conjunction with [member VehicleBody3D.engine_force] and ignored if you are using the per-wheel [member engine_force] value instead. */
        get use_as_traction(): boolean
        set use_as_traction(value: boolean)
        
        /** If `true`, this wheel will be turned when the car steers. This value is used in conjunction with [member VehicleBody3D.steering] and ignored if you are using the per-wheel [member steering] value instead. */
        get use_as_steering(): boolean
        set use_as_steering(value: boolean)
        
        /** This value affects the roll of your vehicle. If set to 1.0 for all wheels, your vehicle will resist body roll, while a value of 0.0 will be prone to rolling over. */
        get wheel_roll_influence(): float64
        set wheel_roll_influence(value: float64)
        
        /** The radius of the wheel in meters. */
        get wheel_radius(): float64
        set wheel_radius(value: float64)
        
        /** This is the distance in meters the wheel is lowered from its origin point. Don't set this to 0.0 and move the wheel into position, instead move the origin point of your wheel (the gizmo in Godot) to the position the wheel will take when bottoming out, then use the rest length to move the wheel down to the position it should be in when the car is in rest. */
        get wheel_rest_length(): float64
        set wheel_rest_length(value: float64)
        
        /** This determines how much grip this wheel has. It is combined with the friction setting of the surface the wheel is in contact with. 0.0 means no grip, 1.0 is normal grip. For a drift car setup, try setting the grip of the rear wheels slightly lower than the front wheels, or use a lower value to simulate tire wear.  
         *  It's best to set this to 1.0 when starting out.  
         */
        get wheel_friction_slip(): float64
        set wheel_friction_slip(value: float64)
        
        /** This is the distance the suspension can travel. As Godot units are equivalent to meters, keep this setting relatively low. Try a value between 0.1 and 0.3 depending on the type of car. */
        get suspension_travel(): float64
        set suspension_travel(value: float64)
        
        /** The stiffness of the suspension, measured in Newtons per millimeter (N/mm), or megagrams per second squared (Mg/s²). Use a value lower than 50 for an off-road car, a value between 50 and 100 for a race car and try something around 200 for something like a Formula 1 car. */
        get suspension_stiffness(): float64
        set suspension_stiffness(value: float64)
        
        /** The maximum force the spring can resist. This value should be higher than a quarter of the [member RigidBody3D.mass] of the [VehicleBody3D] or the spring will not carry the weight of the vehicle. Good results are often obtained by a value that is about 3× to 4× this number. */
        get suspension_max_force(): float64
        set suspension_max_force(value: float64)
        
        /** The damping applied to the suspension spring when being compressed, meaning when the wheel is moving up relative to the vehicle. It is measured in Newton-seconds per millimeter (N⋅s/mm), or megagrams per second (Mg/s). This value should be between 0.0 (no damping) and 1.0, but may be more. A value of 0.0 means the car will keep bouncing as the spring keeps its energy. A good value for this is around 0.3 for a normal car, 0.5 for a race car. */
        get damping_compression(): float64
        set damping_compression(value: float64)
        
        /** The damping applied to the suspension spring when rebounding or extending, meaning when the wheel is moving down relative to the vehicle. It is measured in Newton-seconds per millimeter (N⋅s/mm), or megagrams per second (Mg/s). This value should be between 0.0 (no damping) and 1.0, but may be more. This value should always be slightly higher than the [member damping_compression] property. For a [member damping_compression] value of 0.3, try a relaxation value of 0.5. */
        get damping_relaxation(): float64
        set damping_relaxation(value: float64)
    }
    /** Base resource for video streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_videostream.html  
     */
    class VideoStream extends Resource {
        constructor(identifier?: any)
        /** Called when the video starts playing, to initialize and return a subclass of [VideoStreamPlayback]. */
        /* gdvirtual */ _instantiate_playback(): null | VideoStreamPlayback
        
        /** The video file path or URI that this [VideoStream] resource handles.  
         *  For [VideoStreamTheora], this filename should be an Ogg Theora video file with the `.ogv` extension.  
         */
        get file(): string
        set file(value: string)
    }
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_videostreamplayback.html  
     */
    class VideoStreamPlayback extends Resource {
        constructor(identifier?: any)
        /** Stops playback. May be called multiple times before [method _play], or in response to [method VideoStreamPlayer.stop]. [method _is_playing] should return `false` once stopped. */
        /* gdvirtual */ _stop(): void
        
        /** Called in response to [member VideoStreamPlayer.autoplay] or [method VideoStreamPlayer.play]. Note that manual playback may also invoke [method _stop] multiple times before this method is called. [method _is_playing] should return `true` once playing. */
        /* gdvirtual */ _play(): void
        
        /** Returns the playback state, as determined by calls to [method _play] and [method _stop]. */
        /* gdvirtual */ _is_playing(): boolean
        
        /** Set the paused status of video playback. [method _is_paused] must return [param paused]. Called in response to the [member VideoStreamPlayer.paused] setter. */
        /* gdvirtual */ _set_paused(paused: boolean): void
        
        /** Returns the paused status, as set by [method _set_paused]. */
        /* gdvirtual */ _is_paused(): boolean
        
        /** Returns the video duration in seconds, if known, or 0 if unknown. */
        /* gdvirtual */ _get_length(): float64
        
        /** Return the current playback timestamp. Called in response to the [member VideoStreamPlayer.stream_position] getter. */
        /* gdvirtual */ _get_playback_position(): float64
        
        /** Seeks to [param time] seconds. Called in response to the [member VideoStreamPlayer.stream_position] setter. */
        /* gdvirtual */ _seek(time: float64): void
        
        /** Select the audio track [param idx]. Called when playback starts, and in response to the [member VideoStreamPlayer.audio_track] setter. */
        /* gdvirtual */ _set_audio_track(idx: int64): void
        
        /** Allocates a [Texture2D] in which decoded video frames will be drawn. */
        /* gdvirtual */ _get_texture(): null | Texture2D
        
        /** Ticks video playback for [param delta] seconds. Called every frame as long as both [method _is_paused] and [method _is_playing] return `true`. */
        /* gdvirtual */ _update(delta: float64): void
        
        /** Returns the number of audio channels. */
        /* gdvirtual */ _get_channels(): int64
        
        /** Returns the audio sample rate used for mixing. */
        /* gdvirtual */ _get_mix_rate(): int64
        
        /** Render [param num_frames] audio frames (of [method _get_channels] floats each) from [param buffer], starting from index [param offset] in the array. Returns the number of audio frames rendered, or -1 on error. */
        mix_audio(num_frames: int64, buffer?: PackedFloat32Array | float32[] /* = [] */, offset?: int64 /* = 0 */): int64
    }
    /** A control used for video playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_videostreamplayer.html  
     */
    class VideoStreamPlayer<Map extends NodePathMap = any> extends Control<Map> {
        constructor(identifier?: any)
        /** Starts the video playback from the beginning. If the video is paused, this will not unpause the video. */
        play(): void
        
        /** Stops the video playback and sets the stream position to 0.  
         *      
         *  **Note:** Although the stream position will be set to 0, the first frame of the video stream won't become the current frame.  
         */
        stop(): void
        
        /** Returns `true` if the video is playing.  
         *      
         *  **Note:** The video is still considered playing if paused during playback.  
         */
        is_playing(): boolean
        
        /** Returns the video stream's name, or `"<No Stream>"` if no video stream is assigned. */
        get_stream_name(): string
        
        /** The length of the current stream, in seconds.  
         *      
         *  **Note:** For [VideoStreamTheora] streams (the built-in format supported by Godot), this value will always be zero, as getting the stream length is not implemented yet. The feature may be supported by video formats implemented by a GDExtension add-on.  
         */
        get_stream_length(): float64
        
        /** Returns the current frame as a [Texture2D]. */
        get_video_texture(): null | Texture2D
        
        /** The embedded audio track to play. */
        get audio_track(): int64
        set audio_track(value: int64)
        
        /** The assigned video stream. See description for supported formats. */
        get stream(): null | VideoStream
        set stream(value: null | VideoStream)
        
        /** Audio volume in dB. */
        get volume_db(): float64
        set volume_db(value: float64)
        
        /** Audio volume as a linear value. */
        get volume(): float64
        set volume(value: float64)
        
        /** If `true`, playback starts when the scene loads. */
        get autoplay(): boolean
        set autoplay(value: boolean)
        
        /** If `true`, the video is paused. */
        get paused(): boolean
        set paused(value: boolean)
        
        /** If `true`, the video scales to the control size. Otherwise, the control minimum size will be automatically adjusted to match the video stream's dimensions. */
        get expand(): boolean
        set expand(value: boolean)
        
        /** If `true`, the video restarts when it reaches its end. */
        get loop(): boolean
        set loop(value: boolean)
        
        /** Amount of time in milliseconds to store in buffer while playing. */
        get buffering_msec(): int64
        set buffering_msec(value: int64)
        
        /** The current position of the stream, in seconds.  
         *      
         *  **Note:** Changing this value won't have any effect as seeking is not implemented yet, except in video formats implemented by a GDExtension add-on.  
         */
        get stream_position(): float64
        set stream_position(value: float64)
        
        /** Audio bus to use for sound playback. */
        get bus(): StringName
        set bus(value: StringName)
        
        /** Emitted when playback is finished. */
        readonly finished: Signal<() => void>
    }
    /** [VideoStream] resource for Ogg Theora videos.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_videostreamtheora.html  
     */
    class VideoStreamTheora extends VideoStream {
        constructor(identifier?: any)
    }
    namespace Viewport {
        enum PositionalShadowAtlasQuadrantSubdiv {
            /** This quadrant will not be used. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_DISABLED = 0,
            
            /** This quadrant will only be used by one shadow map. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_1 = 1,
            
            /** This quadrant will be split in 4 and used by up to 4 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_4 = 2,
            
            /** This quadrant will be split 16 ways and used by up to 16 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_16 = 3,
            
            /** This quadrant will be split 64 ways and used by up to 64 shadow maps. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_64 = 4,
            
            /** This quadrant will be split 256 ways and used by up to 256 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_256 = 5,
            
            /** This quadrant will be split 1024 ways and used by up to 1024 shadow maps. Unless the [member positional_shadow_atlas_size] is very high, the shadows in this quadrant will be very low resolution. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_1024 = 6,
            
            /** Represents the size of the [enum PositionalShadowAtlasQuadrantSubdiv] enum. */
            SHADOW_ATLAS_QUADRANT_SUBDIV_MAX = 7,
        }
        enum Scaling3DMode {
            /** Use bilinear scaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will result in undersampling while values greater than `1.0` will result in supersampling. A value of `1.0` disables scaling. */
            SCALING_3D_MODE_BILINEAR = 0,
            
            /** Use AMD FidelityFX Super Resolution 1.0 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling. */
            SCALING_3D_MODE_FSR = 1,
            
            /** Use AMD FidelityFX Super Resolution 2.2 upscaling for the viewport's 3D buffer. The amount of scaling can be set using [member Viewport.scaling_3d_scale]. Values less than `1.0` will be result in the viewport being upscaled using FSR2. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use FSR2 at native resolution as a TAA solution. */
            SCALING_3D_MODE_FSR2 = 2,
            
            /** Use the [url=https://developer.apple.com/documentation/metalfx/mtlfxspatialscaler#overview]MetalFX spatial upscaler[/url] for the viewport's 3D buffer.  
             *  The amount of scaling can be set using [member scaling_3d_scale].  
             *  Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` disables scaling.  
             *  More information: [url=https://developer.apple.com/documentation/metalfx]MetalFX[/url].  
             *      
             *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
             */
            SCALING_3D_MODE_METALFX_SPATIAL = 3,
            
            /** Use the [url=https://developer.apple.com/documentation/metalfx/mtlfxtemporalscaler#overview]MetalFX temporal upscaler[/url] for the viewport's 3D buffer.  
             *  The amount of scaling can be set using [member scaling_3d_scale]. To determine the minimum input scale, use the [method RenderingDevice.limit_get] method with [constant RenderingDevice.LIMIT_METALFX_TEMPORAL_SCALER_MIN_SCALE].  
             *  Values less than `1.0` will be result in the viewport being upscaled using MetalFX. Values greater than `1.0` are not supported and bilinear downsampling will be used instead. A value of `1.0` will use MetalFX at native resolution as a TAA solution.  
             *  More information: [url=https://developer.apple.com/documentation/metalfx]MetalFX[/url].  
             *      
             *  **Note:** Only supported when the Metal rendering driver is in use, which limits this scaling mode to macOS and iOS.  
             */
            SCALING_3D_MODE_METALFX_TEMPORAL = 4,
            
            /** Represents the size of the [enum Scaling3DMode] enum. */
            SCALING_3D_MODE_MAX = 5,
        }
        enum MSAA {
            /** Multisample antialiasing mode disabled. This is the default value, and is also the fastest setting. */
            MSAA_DISABLED = 0,
            
            /** Use 2× Multisample Antialiasing. This has a moderate performance cost. It helps reduce aliasing noticeably, but 4× MSAA still looks substantially better. */
            MSAA_2X = 1,
            
            /** Use 4× Multisample Antialiasing. This has a significant performance cost, and is generally a good compromise between performance and quality. */
            MSAA_4X = 2,
            
            /** Use 8× Multisample Antialiasing. This has a very high performance cost. The difference between 4× and 8× MSAA may not always be visible in real gameplay conditions. Likely unsupported on low-end and older hardware. */
            MSAA_8X = 3,
            
            /** Represents the size of the [enum MSAA] enum. */
            MSAA_MAX = 4,
        }
        enum AnisotropicFiltering {
            /** Anisotropic filtering is disabled. */
            ANISOTROPY_DISABLED = 0,
            
            /** Use 2× anisotropic filtering. */
            ANISOTROPY_2X = 1,
            
            /** Use 4× anisotropic filtering. This is the default value. */
            ANISOTROPY_4X = 2,
            
            /** Use 8× anisotropic filtering. */
            ANISOTROPY_8X = 3,
            
            /** Use 16× anisotropic filtering. */
            ANISOTROPY_16X = 4,
            
            /** Represents the size of the [enum AnisotropicFiltering] enum. */
            ANISOTROPY_MAX = 5,
        }
        enum ScreenSpaceAA {
            /** Do not perform any antialiasing in the full screen post-process. */
            SCREEN_SPACE_AA_DISABLED = 0,
            
            /** Use fast approximate antialiasing. FXAA is a popular screen-space antialiasing method, which is fast but will make the image look blurry, especially at lower resolutions. It can still work relatively well at large resolutions such as 1440p and 4K. */
            SCREEN_SPACE_AA_FXAA = 1,
            
            /** Represents the size of the [enum ScreenSpaceAA] enum. */
            SCREEN_SPACE_AA_MAX = 2,
        }
        enum RenderInfo {
            /** Amount of objects in frame. */
            RENDER_INFO_OBJECTS_IN_FRAME = 0,
            
            /** Amount of vertices in frame. */
            RENDER_INFO_PRIMITIVES_IN_FRAME = 1,
            
            /** Amount of draw calls in frame. */
            RENDER_INFO_DRAW_CALLS_IN_FRAME = 2,
            
            /** Represents the size of the [enum RenderInfo] enum. */
            RENDER_INFO_MAX = 3,
        }
        enum RenderInfoType {
            /** Visible render pass (excluding shadows). */
            RENDER_INFO_TYPE_VISIBLE = 0,
            
            /** Shadow render pass. Objects will be rendered several times depending on the number of amounts of lights with shadows and the number of directional shadow splits. */
            RENDER_INFO_TYPE_SHADOW = 1,
            
            /** Canvas item rendering. This includes all 2D rendering. */
            RENDER_INFO_TYPE_CANVAS = 2,
            
            /** Represents the size of the [enum RenderInfoType] enum. */
            RENDER_INFO_TYPE_MAX = 3,
        }
        enum DebugDraw {
            /** Objects are displayed normally. */
            DEBUG_DRAW_DISABLED = 0,
            
            /** Objects are displayed without light information. */
            DEBUG_DRAW_UNSHADED = 1,
            
            /** Objects are displayed without textures and only with lighting information. */
            DEBUG_DRAW_LIGHTING = 2,
            
            /** Objects are displayed semi-transparent with additive blending so you can see where they are drawing over top of one another. A higher overdraw means you are wasting performance on drawing pixels that are being hidden behind others. */
            DEBUG_DRAW_OVERDRAW = 3,
            
            /** Objects are displayed as wireframe models.  
             *      
             *  **Note:** [method RenderingServer.set_debug_generate_wireframes] must be called before loading any meshes for wireframes to be visible when using the Compatibility renderer.  
             */
            DEBUG_DRAW_WIREFRAME = 4,
            
            /** Objects are displayed without lighting information and their textures replaced by normal mapping. */
            DEBUG_DRAW_NORMAL_BUFFER = 5,
            
            /** Objects are displayed with only the albedo value from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_ALBEDO = 6,
            
            /** Objects are displayed with only the lighting value from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_LIGHTING = 7,
            
            /** Objects are displayed with only the emission color from [VoxelGI]s. */
            DEBUG_DRAW_VOXEL_GI_EMISSION = 8,
            
            /** Draws the shadow atlas that stores shadows from [OmniLight3D]s and [SpotLight3D]s in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_SHADOW_ATLAS = 9,
            
            /** Draws the shadow atlas that stores shadows from [DirectionalLight3D]s in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_DIRECTIONAL_SHADOW_ATLAS = 10,
            
            /** Draws the scene luminance buffer (if available) in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_SCENE_LUMINANCE = 11,
            
            /** Draws the screen-space ambient occlusion texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssao_enabled] set in your [WorldEnvironment]. */
            DEBUG_DRAW_SSAO = 12,
            
            /** Draws the screen-space indirect lighting texture instead of the scene so that you can clearly see how it is affecting objects. In order for this display mode to work, you must have [member Environment.ssil_enabled] set in your [WorldEnvironment]. */
            DEBUG_DRAW_SSIL = 13,
            
            /** Colors each PSSM split for the [DirectionalLight3D]s in the scene a different color so you can see where the splits are. In order, they will be colored red, green, blue, and yellow. */
            DEBUG_DRAW_PSSM_SPLITS = 14,
            
            /** Draws the decal atlas used by [Decal]s and light projector textures in the upper left quadrant of the [Viewport]. */
            DEBUG_DRAW_DECAL_ATLAS = 15,
            
            /** Draws the cascades used to render signed distance field global illumination (SDFGI).  
             *  Does nothing if the current environment's [member Environment.sdfgi_enabled] is `false` or SDFGI is not supported on the platform.  
             */
            DEBUG_DRAW_SDFGI = 16,
            
            /** Draws the probes used for signed distance field global illumination (SDFGI).  
             *  Does nothing if the current environment's [member Environment.sdfgi_enabled] is `false` or SDFGI is not supported on the platform.  
             */
            DEBUG_DRAW_SDFGI_PROBES = 17,
            
            /** Draws the buffer used for global illumination (GI). */
            DEBUG_DRAW_GI_BUFFER = 18,
            
            /** Draws all of the objects at their highest polycount, without low level of detail (LOD). */
            DEBUG_DRAW_DISABLE_LOD = 19,
            
            /** Draws the cluster used by [OmniLight3D] nodes to optimize light rendering. */
            DEBUG_DRAW_CLUSTER_OMNI_LIGHTS = 20,
            
            /** Draws the cluster used by [SpotLight3D] nodes to optimize light rendering. */
            DEBUG_DRAW_CLUSTER_SPOT_LIGHTS = 21,
            
            /** Draws the cluster used by [Decal] nodes to optimize decal rendering. */
            DEBUG_DRAW_CLUSTER_DECALS = 22,
            
            /** Draws the cluster used by [ReflectionProbe] nodes to optimize decal rendering. */
            DEBUG_DRAW_CLUSTER_REFLECTION_PROBES = 23,
            
            /** Draws the buffer used for occlusion culling. */
            DEBUG_DRAW_OCCLUDERS = 24,
            
            /** Draws vector lines over the viewport to indicate the movement of pixels between frames. */
            DEBUG_DRAW_MOTION_VECTORS = 25,
            
            /** Draws the internal resolution buffer of the scene before post-processing is applied. */
            DEBUG_DRAW_INTERNAL_BUFFER = 26,
        }
        enum DefaultCanvasItemTextureFilter {
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST = 0,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR = 1,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_LINEAR_WITH_MIPMAPS = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_NEAREST_WITH_MIPMAPS = 3,
            
            /** Represents the size of the [enum DefaultCanvasItemTextureFilter] enum. */
            DEFAULT_CANVAS_ITEM_TEXTURE_FILTER_MAX = 4,
        }
        enum DefaultCanvasItemTextureRepeat {
            /** Disables textures repeating. Instead, when reading UVs outside the 0-1 range, the value will be clamped to the edge of the texture, resulting in a stretched out look at the borders of the texture. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_DISABLED = 0,
            
            /** Enables the texture to repeat when UV coordinates are outside the 0-1 range. If using one of the linear filtering modes, this can result in artifacts at the edges of a texture when the sampler filters across the edges of the texture. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_ENABLED = 1,
            
            /** Flip the texture when repeating so that the edge lines up instead of abruptly changing. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MIRROR = 2,
            
            /** Represents the size of the [enum DefaultCanvasItemTextureRepeat] enum. */
            DEFAULT_CANVAS_ITEM_TEXTURE_REPEAT_MAX = 3,
        }
        enum SDFOversize {
            /** The signed distance field only covers the viewport's own rectangle. */
            SDF_OVERSIZE_100_PERCENT = 0,
            
            /** The signed distance field is expanded to cover 20% of the viewport's size around the borders. */
            SDF_OVERSIZE_120_PERCENT = 1,
            
            /** The signed distance field is expanded to cover 50% of the viewport's size around the borders. */
            SDF_OVERSIZE_150_PERCENT = 2,
            
            /** The signed distance field is expanded to cover 100% (double) of the viewport's size around the borders. */
            SDF_OVERSIZE_200_PERCENT = 3,
            
            /** Represents the size of the [enum SDFOversize] enum. */
            SDF_OVERSIZE_MAX = 4,
        }
        enum SDFScale {
            /** The signed distance field is rendered at full resolution. */
            SDF_SCALE_100_PERCENT = 0,
            
            /** The signed distance field is rendered at half the resolution of this viewport. */
            SDF_SCALE_50_PERCENT = 1,
            
            /** The signed distance field is rendered at a quarter the resolution of this viewport. */
            SDF_SCALE_25_PERCENT = 2,
            
            /** Represents the size of the [enum SDFScale] enum. */
            SDF_SCALE_MAX = 3,
        }
        enum VRSMode {
            /** Variable Rate Shading is disabled. */
            VRS_DISABLED = 0,
            
            /** Variable Rate Shading uses a texture. Note, for stereoscopic use a texture atlas with a texture for each view. */
            VRS_TEXTURE = 1,
            
            /** Variable Rate Shading's texture is supplied by the primary [XRInterface]. */
            VRS_XR = 2,
            
            /** Represents the size of the [enum VRSMode] enum. */
            VRS_MAX = 3,
        }
        enum VRSUpdateMode {
            /** The input texture for variable rate shading will not be processed. */
            VRS_UPDATE_DISABLED = 0,
            
            /** The input texture for variable rate shading will be processed once. */
            VRS_UPDATE_ONCE = 1,
            
            /** The input texture for variable rate shading will be processed each frame. */
            VRS_UPDATE_ALWAYS = 2,
            
            /** Represents the size of the [enum VRSUpdateMode] enum. */
            VRS_UPDATE_MAX = 3,
        }
    }
    /** Abstract base class for viewports. Encapsulates drawing and interaction with a game world.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_viewport.html  
     */
    class Viewport<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** Returns the first valid [World2D] for this viewport, searching the [member world_2d] property of itself and any Viewport ancestor. */
        find_world_2d(): null | World2D
        
        /** Returns the automatically computed 2D stretch transform, taking the [Viewport]'s stretch settings into account. The final value is multiplied by [member Window.content_scale_factor], but only for the root viewport. If this method is called on a [SubViewport] (e.g., in a scene tree with [SubViewportContainer] and [SubViewport]), the scale factor of the root window will not be applied. Using [method Transform2D.get_scale] on the returned value, this can be used to compensate for scaling when zooming a [Camera2D] node, or to scale down a [TextureRect] to be pixel-perfect regardless of the automatically computed scale factor.  
         *      
         *  **Note:** Due to how pixel scaling works, the returned transform's X and Y scale may differ slightly, even when [member Window.content_scale_aspect] is set to a mode that preserves the pixels' aspect ratio. If [member Window.content_scale_aspect] is [constant Window.CONTENT_SCALE_ASPECT_IGNORE], the X and Y scale may differ  *significantly* .  
         */
        get_stretch_transform(): Transform2D
        
        /** Returns the transform from the viewport's coordinate system to the embedder's coordinate system. */
        get_final_transform(): Transform2D
        
        /** Returns the transform from the Viewport's coordinates to the screen coordinates of the containing window manager window. */
        get_screen_transform(): Transform2D
        
        /** Returns the visible rectangle in global screen coordinates. */
        get_visible_rect(): Rect2
        
        /** Returns rendering statistics of the given type. See [enum RenderInfoType] and [enum RenderInfo] for options. */
        get_render_info(type: Viewport.RenderInfoType, info: Viewport.RenderInfo): int64
        
        /** Returns the viewport's texture.  
         *      
         *  **Note:** When trying to store the current texture (e.g. in a file), it might be completely black or outdated if used too early, especially when used in e.g. [method Node._ready]. To make sure the texture you get is correct, you can await [signal RenderingServer.frame_post_draw] signal.  
         *    
         *      
         *  **Note:** When [member use_hdr_2d] is `true` the returned texture will be an HDR image encoded in linear space.  
         */
        get_texture(): null | ViewportTexture
        
        /** Returns the viewport's RID from the [RenderingServer]. */
        get_viewport_rid(): RID
        
        /** Helper method which calls the `set_text()` method on the currently focused [Control], provided that it is defined (e.g. if the focused Control is [Button] or [LineEdit]). */
        push_text_input(text: string): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  While this method serves a similar purpose as [method Input.parse_input_event], it does not remap the specified [param event] based on project settings like [member ProjectSettings.input_devices/pointing/emulate_touch_from_mouse].  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._input]  
         *  - [method Control._gui_input] for [Control] nodes  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         */
        push_input(event: InputEvent, in_local_coords?: boolean /* = false */): void
        
        /** Triggers the given [param event] in this [Viewport]. This can be used to pass an [InputEvent] between viewports, or to locally apply inputs that were sent over the network or saved to a file.  
         *  If [param in_local_coords] is `false`, the event's position is in the embedder's coordinates and will be converted to viewport coordinates. If [param in_local_coords] is `true`, the event's position is in viewport coordinates.  
         *  Calling this method will propagate calls to child nodes for following methods in the given order:  
         *  - [method Node._shortcut_input]  
         *  - [method Node._unhandled_key_input]  
         *  - [method Node._unhandled_input]  
         *  If an earlier method marks the input as handled via [method set_input_as_handled], any later method in this list will not be called.  
         *  If none of the methods handle the event and [member physics_object_picking] is `true`, the event is used for physics object picking.  
         *      
         *  **Note:** This method doesn't propagate input events to embedded [Window]s or [SubViewport]s.  
         */
        push_unhandled_input(event: InputEvent, in_local_coords?: boolean /* = false */): void
        
        /** Inform the Viewport that the mouse has entered its area. Use this function before sending an [InputEventMouseButton] or [InputEventMouseMotion] to the [Viewport] with [method Viewport.push_input]. See also [method notify_mouse_exited].  
         *      
         *  **Note:** In most cases, it is not necessary to call this function because [SubViewport] nodes that are children of [SubViewportContainer] are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in [TextureRect] or with an [Area3D] that forwards input events.  
         */
        notify_mouse_entered(): void
        
        /** Inform the Viewport that the mouse has left its area. Use this function when the node that displays the viewport notices the mouse has left the area of the displayed viewport. See also [method notify_mouse_entered].  
         *      
         *  **Note:** In most cases, it is not necessary to call this function because [SubViewport] nodes that are children of [SubViewportContainer] are notified automatically. This is only necessary when interacting with viewports in non-default ways, for example as textures in [TextureRect] or with an [Area3D] that forwards input events.  
         */
        notify_mouse_exited(): void
        
        /** Returns the mouse's position in this [Viewport] using the coordinate system of this [Viewport]. */
        get_mouse_position(): Vector2
        
        /** Moves the mouse pointer to the specified position in this [Viewport] using the coordinate system of this [Viewport].  
         *      
         *  **Note:** [method warp_mouse] is only supported on Windows, macOS and Linux. It has no effect on Android, iOS and Web.  
         */
        warp_mouse(position: Vector2): void
        
        /** Force instantly updating the display based on the current mouse cursor position. This includes updating the mouse cursor shape and sending necessary [signal Control.mouse_entered], [signal CollisionObject2D.mouse_entered], [signal CollisionObject3D.mouse_entered] and [signal Window.mouse_entered] signals and their respective `mouse_exited` counterparts. */
        update_mouse_cursor_state(): void
        
        /** Cancels the drag operation that was previously started through [method Control._get_drag_data] or forced with [method Control.force_drag]. */
        gui_cancel_drag(): void
        
        /** Returns the drag data from the GUI, that was previously returned by [method Control._get_drag_data]. */
        gui_get_drag_data(): any
        
        /** Returns `true` if a drag operation is currently ongoing and where the drop action could happen in this viewport.  
         *  Alternative to [constant Node.NOTIFICATION_DRAG_BEGIN] and [constant Node.NOTIFICATION_DRAG_END] when you prefer polling the value.  
         */
        gui_is_dragging(): boolean
        
        /** Returns `true` if the drag operation is successful. */
        gui_is_drag_successful(): boolean
        
        /** Removes the focus from the currently focused [Control] within this viewport. If no [Control] has the focus, does nothing. */
        gui_release_focus(): void
        
        /** Returns the currently focused [Control] within this viewport. If no [Control] is focused, returns `null`. */
        gui_get_focus_owner(): null | Control
        
        /** Returns the [Control] that the mouse is currently hovering over in this viewport. If no [Control] has the cursor, returns `null`.  
         *  Typically the leaf [Control] node or deepest level of the subtree which claims hover. This is very useful when used together with [method Node.is_ancestor_of] to find if the mouse is within a control tree.  
         */
        gui_get_hovered_control(): null | Control
        _gui_remove_focus_for_window(_unnamed_arg0: Node): void
        
        /** Sets the number of subdivisions to use in the specified quadrant. A higher number of subdivisions allows you to have more shadows in the scene at once, but reduces the quality of the shadows. A good practice is to have quadrants with a varying number of subdivisions and to have as few subdivisions as possible. */
        set_positional_shadow_atlas_quadrant_subdiv(quadrant: int64, subdiv: Viewport.PositionalShadowAtlasQuadrantSubdiv): void
        
        /** Returns the positional shadow atlas quadrant subdivision of the specified quadrant. */
        get_positional_shadow_atlas_quadrant_subdiv(quadrant: int64): Viewport.PositionalShadowAtlasQuadrantSubdiv
        
        /** Stops the input from propagating further down the [SceneTree].  
         *      
         *  **Note:** This does not affect the methods in [Input], only the way events are propagated.  
         */
        set_input_as_handled(): void
        
        /** Returns whether the current [InputEvent] has been handled. Input events are not handled until [method set_input_as_handled] has been called during the lifetime of an [InputEvent].  
         *  This is usually done as part of input handling methods like [method Node._input], [method Control._gui_input] or others, as well as in corresponding signal handlers.  
         *  If [member handle_input_locally] is set to `false`, this method will try finding the first parent viewport that is set to handle input locally, and return its value for [method is_input_handled] instead.  
         */
        is_input_handled(): boolean
        
        /** Returns a list of the visible embedded [Window]s inside the viewport.  
         *      
         *  **Note:** [Window]s inside other viewports will not be listed.  
         */
        get_embedded_subwindows(): GArray
        
        /** Set/clear individual bits on the rendering layer mask. This simplifies editing this [Viewport]'s layers. */
        set_canvas_cull_mask_bit(layer: int64, enable: boolean): void
        
        /** Returns an individual bit on the rendering layer mask. */
        get_canvas_cull_mask_bit(layer: int64): boolean
        _process_picking(): void
        
        /** Returns the currently active 2D audio listener. Returns `null` if there are no active 2D audio listeners, in which case the active 2D camera will be treated as listener. */
        get_audio_listener_2d(): null | AudioListener2D
        
        /** Returns the currently active 2D camera. Returns `null` if there are no active cameras. */
        get_camera_2d(): null | Camera2D
        
        /** Returns the first valid [World3D] for this viewport, searching the [member world_3d] property of itself and any Viewport ancestor. */
        find_world_3d(): null | World3D
        
        /** Returns the currently active 3D audio listener. Returns `null` if there are no active 3D audio listeners, in which case the active 3D camera will be treated as listener. */
        get_audio_listener_3d(): null | AudioListener3D
        
        /** Returns the currently active 3D camera. */
        get_camera_3d(): null | Camera3D
        
        /** Disable 3D rendering (but keep 2D rendering). */
        get disable_3d(): boolean
        set disable_3d(value: boolean)
        
        /** If `true`, the viewport will use the primary XR interface to render XR output. When applicable this can result in a stereoscopic image and the resulting render being output to a headset. */
        get use_xr(): boolean
        set use_xr(value: boolean)
        
        /** If `true`, the viewport will use a unique copy of the [World3D] defined in [member world_3d]. */
        get own_world_3d(): boolean
        set own_world_3d(value: boolean)
        
        /** The custom [World3D] which can be used as 3D environment source. */
        get world_3d(): null | World3D
        set world_3d(value: null | World3D)
        
        /** The custom [World2D] which can be used as 2D environment source. */
        get world_2d(): null | World2D
        set world_2d(value: null | World2D)
        
        /** If `true`, the viewport should render its background as transparent. */
        get transparent_bg(): boolean
        set transparent_bg(value: boolean)
        
        /** If `true`, this viewport will mark incoming input events as handled by itself. If `false`, this is instead done by the first parent viewport that is set to handle input locally.  
         *  A [SubViewportContainer] will automatically set this property to `false` for the [Viewport] contained inside of it.  
         *  See also [method set_input_as_handled] and [method is_input_handled].  
         */
        get handle_input_locally(): boolean
        set handle_input_locally(value: boolean)
        
        /** If `true`, [CanvasItem] nodes will internally snap to full pixels. Their position can still be sub-pixel, but the decimals will not have effect. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. */
        get snap_2d_transforms_to_pixel(): boolean
        set snap_2d_transforms_to_pixel(value: boolean)
        
        /** If `true`, vertices of [CanvasItem] nodes will snap to full pixels. Only affects the final vertex positions, not the transforms. This can lead to a crisper appearance at the cost of less smooth movement, especially when [Camera2D] smoothing is enabled. */
        get snap_2d_vertices_to_pixel(): boolean
        set snap_2d_vertices_to_pixel(value: boolean)
        
        /** The multisample antialiasing mode for 2D/Canvas rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [constant Viewport.MSAA_2X] or [constant Viewport.MSAA_4X] is best unless targeting very high-end systems. This has no effect on shader-induced aliasing or texture aliasing.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_2d] and [method RenderingServer.viewport_set_msaa_2d].  
         */
        get msaa_2d(): int64
        set msaa_2d(value: int64)
        
        /** The multisample antialiasing mode for 3D rendering. A higher number results in smoother edges at the cost of significantly worse performance. A value of [constant Viewport.MSAA_2X] or [constant Viewport.MSAA_4X] is best unless targeting very high-end systems. See also bilinear scaling 3D [member scaling_3d_mode] for supersampling, which provides higher quality but is much more expensive. This has no effect on shader-induced aliasing or texture aliasing.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] and [method RenderingServer.viewport_set_msaa_3d].  
         */
        get msaa_3d(): int64
        set msaa_3d(value: int64)
        
        /** Sets the screen-space antialiasing method used. Screen-space antialiasing works by selectively blurring edges in a post-process shader. It differs from MSAA which takes multiple coverage samples while rendering objects. Screen-space AA methods are typically faster than MSAA and will smooth out specular aliasing, but tend to make scenes appear blurry.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/screen_space_aa] and [method RenderingServer.viewport_set_screen_space_aa].  
         */
        get screen_space_aa(): int64
        set screen_space_aa(value: int64)
        
        /** Enables temporal antialiasing for this viewport. TAA works by jittering the camera and accumulating the images of the last rendered frames, motion vector rendering is used to account for camera and object motion.  
         *      
         *  **Note:** The implementation is not complete yet, some visual instances such as particles and skinned meshes may show artifacts.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/use_taa] and [method RenderingServer.viewport_set_use_taa].  
         */
        get use_taa(): boolean
        set use_taa(value: boolean)
        
        /** If `true`, uses a fast post-processing filter to make banding significantly less visible in 3D. 2D rendering is  *not*  affected by debanding unless the [member Environment.background_mode] is [constant Environment.BG_CANVAS].  
         *  In some cases, debanding may introduce a slightly noticeable dithering pattern. It's recommended to enable debanding only when actually needed since the dithering pattern will make lossless-compressed screenshots larger.  
         *  See also [member ProjectSettings.rendering/anti_aliasing/quality/use_debanding] and [method RenderingServer.viewport_set_use_debanding].  
         */
        get use_debanding(): boolean
        set use_debanding(value: boolean)
        
        /** If `true`, [OccluderInstance3D] nodes will be usable for occlusion culling in 3D for this viewport. For the root viewport, [member ProjectSettings.rendering/occlusion_culling/use_occlusion_culling] must be set to `true` instead.  
         *      
         *  **Note:** Enabling occlusion culling has a cost on the CPU. Only enable occlusion culling if you actually plan to use it, and think whether your scene can actually benefit from occlusion culling. Large, open scenes with few or no objects blocking the view will generally not benefit much from occlusion culling. Large open scenes generally benefit more from mesh LOD and visibility ranges ([member GeometryInstance3D.visibility_range_begin] and [member GeometryInstance3D.visibility_range_end]) compared to occlusion culling.  
         *      
         *  **Note:** Due to memory constraints, occlusion culling is not supported by default in Web export templates. It can be enabled by compiling custom Web export templates with `module_raycast_enabled=yes`.  
         */
        get use_occlusion_culling(): boolean
        set use_occlusion_culling(value: boolean)
        
        /** The automatic LOD bias to use for meshes rendered within the [Viewport] (this is analogous to [member ReflectionProbe.mesh_lod_threshold]). Higher values will use less detailed versions of meshes that have LOD variations generated. If set to `0.0`, automatic LOD is disabled. Increase [member mesh_lod_threshold] to improve performance at the cost of geometry detail.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/mesh_lod/lod_change/threshold_pixels] project setting.  
         *      
         *  **Note:** [member mesh_lod_threshold] does not affect [GeometryInstance3D] visibility ranges (also known as "manual" LOD or hierarchical LOD).  
         */
        get mesh_lod_threshold(): float64
        set mesh_lod_threshold(value: float64)
        
        /** The overlay mode for test rendered geometry in debug purposes. */
        get debug_draw(): int64
        set debug_draw(value: int64)
        
        /** If `true`, 2D rendering will use an high dynamic range (HDR) format framebuffer matching the bit depth of the 3D framebuffer. When using the Forward+ renderer this will be an `RGBA16` framebuffer, while when using the Mobile renderer it will be an `RGB10_A2` framebuffer. Additionally, 2D rendering will take place in linear color space and will be converted to sRGB space immediately before blitting to the screen (if the Viewport is attached to the screen). Practically speaking, this means that the end result of the Viewport will not be clamped into the `0-1` range and can be used in 3D rendering without color space adjustments. This allows 2D rendering to take advantage of effects requiring high dynamic range (e.g. 2D glow) as well as substantially improves the appearance of effects requiring highly detailed gradients.  
         *      
         *  **Note:** This setting will have no effect when using the Compatibility renderer, which always renders in low dynamic range for performance reasons.  
         */
        get use_hdr_2d(): boolean
        set use_hdr_2d(value: boolean)
        
        /** Sets scaling 3D mode. Bilinear scaling renders at different resolution to either undersample or supersample the viewport. FidelityFX Super Resolution 1.0, abbreviated to FSR, is an upscaling technology that produces high quality images at fast framerates by using a spatially aware upscaling algorithm. FSR is slightly more expensive than bilinear, but it produces significantly higher image quality. FSR should be used where possible.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/mode] project setting.  
         */
        get scaling_3d_mode(): int64
        set scaling_3d_mode(value: int64)
        
        /** Scales the 3D render buffer based on the viewport size uses an image filter specified in [member ProjectSettings.rendering/scaling_3d/mode] to scale the output image to the full viewport size. Values lower than `1.0` can be used to speed up 3D rendering at the cost of quality (undersampling). Values greater than `1.0` are only valid for bilinear mode and can be used to improve 3D rendering quality at a high performance cost (supersampling). See also [member ProjectSettings.rendering/anti_aliasing/quality/msaa_3d] for multi-sample antialiasing, which is significantly cheaper but only smooths the edges of polygons.  
         *  When using FSR upscaling, AMD recommends exposing the following values as preset options to users "Ultra Quality: 0.77", "Quality: 0.67", "Balanced: 0.59", "Performance: 0.5" instead of exposing the entire scale.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/scale] project setting.  
         */
        get scaling_3d_scale(): float64
        set scaling_3d_scale(value: float64)
        
        /** Affects the final texture sharpness by reading from a lower or higher mipmap (also called "texture LOD bias"). Negative values make mipmapped textures sharper but grainier when viewed at a distance, while positive values make mipmapped textures blurrier (even when up close).  
         *  Enabling temporal antialiasing ([member use_taa]) will automatically apply a `-0.5` offset to this value, while enabling FXAA ([member screen_space_aa]) will automatically apply a `-0.25` offset to this value. If both TAA and FXAA are enabled at the same time, an offset of `-0.75` is applied to this value.  
         *      
         *  **Note:** If [member scaling_3d_scale] is lower than `1.0` (exclusive), [member texture_mipmap_bias] is used to adjust the automatic mipmap bias which is calculated internally based on the scale factor. The formula for this is `log2(scaling_3d_scale) + mipmap_bias`.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/textures/default_filters/texture_mipmap_bias] project setting.  
         */
        get texture_mipmap_bias(): float64
        set texture_mipmap_bias(value: float64)
        
        /** Sets the maximum number of samples to take when using anisotropic filtering on textures (as a power of two). A higher sample count will result in sharper textures at oblique angles, but is more expensive to compute. A value of `0` forcibly disables anisotropic filtering, even on materials where it is enabled.  
         *  The anisotropic filtering level also affects decals and light projectors if they are configured to use anisotropic filtering. See [member ProjectSettings.rendering/textures/decals/filter] and [member ProjectSettings.rendering/textures/light_projectors/filter].  
         *      
         *  **Note:** In 3D, for this setting to have an effect, set [member BaseMaterial3D.texture_filter] to [constant BaseMaterial3D.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant BaseMaterial3D.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on materials.  
         *      
         *  **Note:** In 2D, for this setting to have an effect, set [member CanvasItem.texture_filter] to [constant CanvasItem.TEXTURE_FILTER_LINEAR_WITH_MIPMAPS_ANISOTROPIC] or [constant CanvasItem.TEXTURE_FILTER_NEAREST_WITH_MIPMAPS_ANISOTROPIC] on the [CanvasItem] node displaying the texture (or in [CanvasTexture]). However, anisotropic filtering is rarely useful in 2D, so only enable it for textures in 2D if it makes a meaningful visual difference.  
         */
        get anisotropic_filtering_level(): int64
        set anisotropic_filtering_level(value: int64)
        
        /** Determines how sharp the upscaled image will be when using the FSR upscaling mode. Sharpness halves with every whole number. Values go from 0.0 (sharpest) to 2.0. Values above 2.0 won't make a visible difference.  
         *  To control this property on the root viewport, set the [member ProjectSettings.rendering/scaling_3d/fsr_sharpness] project setting.  
         */
        get fsr_sharpness(): float64
        set fsr_sharpness(value: float64)
        
        /** The Variable Rate Shading (VRS) mode that is used for this viewport. Note, if hardware does not support VRS this property is ignored. */
        get vrs_mode(): int64
        set vrs_mode(value: int64)
        
        /** Sets the update mode for Variable Rate Shading (VRS) for the viewport. VRS requires the input texture to be converted to the format usable by the VRS method supported by the hardware. The update mode defines how often this happens. If the GPU does not support VRS, or VRS is not enabled, this property is ignored. */
        get vrs_update_mode(): int64
        set vrs_update_mode(value: int64)
        
        /** Texture to use when [member vrs_mode] is set to [constant Viewport.VRS_TEXTURE].  
         *  The texture  *must*  use a lossless compression format so that colors can be matched precisely. The following VRS densities are mapped to various colors, with brighter colors representing a lower level of shading precision:  
         *  [codeblock lang=text]  
         *  - 1×1 = rgb(0, 0, 0)     - #000000  
         *  - 1×2 = rgb(0, 85, 0)    - #005500  
         *  - 2×1 = rgb(85, 0, 0)    - #550000  
         *  - 2×2 = rgb(85, 85, 0)   - #555500  
         *  - 2×4 = rgb(85, 170, 0)  - #55aa00  
         *  - 4×2 = rgb(170, 85, 0)  - #aa5500  
         *  - 4×4 = rgb(170, 170, 0) - #aaaa00  
         *  - 4×8 = rgb(170, 255, 0) - #aaff00 - Not supported on most hardware  
         *  - 8×4 = rgb(255, 170, 0) - #ffaa00 - Not supported on most hardware  
         *  - 8×8 = rgb(255, 255, 0) - #ffff00 - Not supported on most hardware  
         *  [/codeblock]  
         */
        get vrs_texture(): null | Texture2D
        set vrs_texture(value: null | Texture2D)
        
        /** Sets the default filter mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureFilter] for options. */
        get canvas_item_default_texture_filter(): int64
        set canvas_item_default_texture_filter(value: int64)
        
        /** Sets the default repeat mode used by [CanvasItem]s in this Viewport. See [enum DefaultCanvasItemTextureRepeat] for options. */
        get canvas_item_default_texture_repeat(): int64
        set canvas_item_default_texture_repeat(value: int64)
        
        /** If `true`, the viewport will process 2D audio streams. */
        get audio_listener_enable_2d(): boolean
        set audio_listener_enable_2d(value: boolean)
        
        /** If `true`, the viewport will process 3D audio streams. */
        get audio_listener_enable_3d(): boolean
        set audio_listener_enable_3d(value: boolean)
        
        /** If `true`, the objects rendered by viewport become subjects of mouse picking process.  
         *      
         *  **Note:** The number of simultaneously pickable objects is limited to 64 and they are selected in a non-deterministic order, which can be different in each picking process.  
         */
        get physics_object_picking(): boolean
        set physics_object_picking(value: boolean)
        
        /** If `true`, objects receive mouse picking events sorted primarily by their [member CanvasItem.z_index] and secondarily by their position in the scene tree. If `false`, the order is undetermined.  
         *      
         *  **Note:** This setting is disabled by default because of its potential expensive computational cost.  
         *      
         *  **Note:** Sorting happens after selecting the pickable objects. Because of the limitation of 64 simultaneously pickable objects, it is not guaranteed that the object with the highest [member CanvasItem.z_index] receives the picking event.  
         */
        get physics_object_picking_sort(): boolean
        set physics_object_picking_sort(value: boolean)
        
        /** If `true`, the input_event signal will only be sent to one physics object in the mouse picking process. If you want to get the top object only, you must also enable [member physics_object_picking_sort].  
         *  If `false`, an input_event signal will be sent to all physics objects in the mouse picking process.  
         *  This applies to 2D CanvasItem object picking only.  
         */
        get physics_object_picking_first_only(): boolean
        set physics_object_picking_first_only(value: boolean)
        
        /** If `true`, the viewport will not receive input events. */
        get gui_disable_input(): boolean
        set gui_disable_input(value: boolean)
        
        /** If `true`, the GUI controls on the viewport will lay pixel perfectly. */
        get gui_snap_controls_to_pixels(): boolean
        set gui_snap_controls_to_pixels(value: boolean)
        
        /** If `true`, sub-windows (popups and dialogs) will be embedded inside application window as control-like nodes. If `false`, they will appear as separate windows handled by the operating system. */
        get gui_embed_subwindows(): boolean
        set gui_embed_subwindows(value: boolean)
        
        /** Controls how much of the original viewport's size should be covered by the 2D signed distance field. This SDF can be sampled in [CanvasItem] shaders and is also used for [GPUParticles2D] collision. Higher values allow portions of occluders located outside the viewport to still be taken into account in the generated signed distance field, at the cost of performance. If you notice particles falling through [LightOccluder2D]s as the occluders leave the viewport, increase this setting.  
         *  The percentage is added on each axis and on both sides. For example, with the default [constant SDF_OVERSIZE_120_PERCENT], the signed distance field will cover 20% of the viewport's size outside the viewport on each side (top, right, bottom, left).  
         */
        get sdf_oversize(): int64
        set sdf_oversize(value: int64)
        
        /** The resolution scale to use for the 2D signed distance field. Higher values lead to a more precise and more stable signed distance field as the camera moves, at the cost of performance. */
        get sdf_scale(): int64
        set sdf_scale(value: int64)
        
        /** The shadow atlas' resolution (used for omni and spot lights). The value is rounded up to the nearest power of 2.  
         *      
         *  **Note:** If this is set to `0`, no positional shadows will be visible at all. This can improve performance significantly on low-end systems by reducing both the CPU and GPU load (as fewer draw calls are needed to draw the scene without shadows).  
         */
        get positional_shadow_atlas_size(): int64
        set positional_shadow_atlas_size(value: int64)
        
        /** Use 16 bits for the omni/spot shadow depth map. Enabling this results in shadows having less precision and may result in shadow acne, but can lead to performance improvements on some devices. */
        get positional_shadow_atlas_16_bits(): boolean
        set positional_shadow_atlas_16_bits(value: boolean)
        
        /** The subdivision amount of the first quadrant on the shadow atlas. */
        get positional_shadow_atlas_quad_0(): int64
        set positional_shadow_atlas_quad_0(value: int64)
        
        /** The subdivision amount of the second quadrant on the shadow atlas. */
        get positional_shadow_atlas_quad_1(): int64
        set positional_shadow_atlas_quad_1(value: int64)
        
        /** The subdivision amount of the third quadrant on the shadow atlas. */
        get positional_shadow_atlas_quad_2(): int64
        set positional_shadow_atlas_quad_2(value: int64)
        
        /** The subdivision amount of the fourth quadrant on the shadow atlas. */
        get positional_shadow_atlas_quad_3(): int64
        set positional_shadow_atlas_quad_3(value: int64)
        
        /** The canvas transform of the viewport, useful for changing the on-screen positions of all child [CanvasItem]s. This is relative to the global canvas transform of the viewport. */
        get canvas_transform(): Transform2D
        set canvas_transform(value: Transform2D)
        
        /** The global canvas transform of the viewport. The canvas transform is relative to this. */
        get global_canvas_transform(): Transform2D
        set global_canvas_transform(value: Transform2D)
        
        /** The rendering layers in which this [Viewport] renders [CanvasItem] nodes. */
        get canvas_cull_mask(): int64
        set canvas_cull_mask(value: int64)
        
        /** Emitted when the size of the viewport is changed, whether by resizing of window, or some other means. */
        readonly size_changed: Signal<() => void>
        
        /** Emitted when a Control node grabs keyboard focus.  
         *      
         *  **Note:** A Control node losing focus doesn't cause this signal to be emitted.  
         */
        readonly gui_focus_changed: Signal<(node: Control) => void>
    }
    /** Provides the content of a [Viewport] as a dynamic texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_viewporttexture.html  
     */
    class ViewportTexture extends Texture2D {
        constructor(identifier?: any)
        /** The path to the [Viewport] node to display. This is relative to the local scene root (see [method Resource.get_local_scene]), **not** to the nodes that use this texture.  
         *      
         *  **Note:** In the editor, this path is automatically updated when the target viewport or one of its ancestors is renamed or moved. At runtime, this path may not automatically update if the scene root cannot be found.  
         */
        get viewport_path(): NodePath
        set viewport_path(value: NodePath | string)
    }
    namespace VisibleOnScreenEnabler2D {
        enum EnableMode {
            /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
            ENABLE_MODE_INHERIT = 0,
            
            /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
            ENABLE_MODE_ALWAYS = 1,
            
            /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    /** A rectangular region of 2D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visibleonscreenenabler2d.html  
     */
    class VisibleOnScreenEnabler2D<Map extends NodePathMap = any> extends VisibleOnScreenNotifier2D<Map> {
        constructor(identifier?: any)
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enable_mode(): int64
        set enable_mode(value: int64)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler2D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler2D] is inside the scene tree) and every time the [VisibleOnScreenEnabler2D] enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated. */
        get enable_node_path(): NodePath
        set enable_node_path(value: NodePath | string)
    }
    namespace VisibleOnScreenEnabler3D {
        enum EnableMode {
            /** Corresponds to [constant Node.PROCESS_MODE_INHERIT]. */
            ENABLE_MODE_INHERIT = 0,
            
            /** Corresponds to [constant Node.PROCESS_MODE_ALWAYS]. */
            ENABLE_MODE_ALWAYS = 1,
            
            /** Corresponds to [constant Node.PROCESS_MODE_WHEN_PAUSED]. */
            ENABLE_MODE_WHEN_PAUSED = 2,
        }
    }
    /** A box-shaped region of 3D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visibleonscreenenabler3d.html  
     */
    class VisibleOnScreenEnabler3D<Map extends NodePathMap = any> extends VisibleOnScreenNotifier3D<Map> {
        constructor(identifier?: any)
        /** Determines how the target node is enabled. Corresponds to [enum Node.ProcessMode]. When the node is disabled, it always uses [constant Node.PROCESS_MODE_DISABLED]. */
        get enable_mode(): int64
        set enable_mode(value: int64)
        
        /** The path to the target node, relative to the [VisibleOnScreenEnabler3D]. The target node is cached; it's only assigned when setting this property (if the [VisibleOnScreenEnabler3D] is inside the scene tree) and every time the [VisibleOnScreenEnabler3D] enters the scene tree. If the path is empty, no node will be affected. If the path is invalid, an error is also generated. */
        get enable_node_path(): NodePath
        set enable_node_path(value: NodePath | string)
    }
    /** A rectangular region of 2D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visibleonscreennotifier2d.html  
     */
    class VisibleOnScreenNotifier2D<Map extends NodePathMap = any> extends Node2D<Map> {
        constructor(identifier?: any)
        /** If `true`, the bounding rectangle is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier2D]'s visibility to be determined once added to the scene tree, so this method will always return `false` right after it is instantiated, before the draw pass.  
         */
        is_on_screen(): boolean
        
        /** The VisibleOnScreenNotifier2D's bounding rectangle. */
        get rect(): Rect2
        set rect(value: Rect2)
        
        /** Emitted when the VisibleOnScreenNotifier2D enters the screen. */
        readonly screen_entered: Signal<() => void>
        
        /** Emitted when the VisibleOnScreenNotifier2D exits the screen. */
        readonly screen_exited: Signal<() => void>
    }
    /** A box-shaped region of 3D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visibleonscreennotifier3d.html  
     */
    class VisibleOnScreenNotifier3D<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the bounding box is on the screen.  
         *      
         *  **Note:** It takes one frame for the [VisibleOnScreenNotifier3D]'s visibility to be assessed once added to the scene tree, so this method will always return `false` right after it is instantiated.  
         */
        is_on_screen(): boolean
        
        /** The [VisibleOnScreenNotifier3D]'s bounding box. */
        get aabb(): AABB
        set aabb(value: AABB)
        
        /** Emitted when the [VisibleOnScreenNotifier3D] enters the screen. */
        readonly screen_entered: Signal<() => void>
        
        /** Emitted when the [VisibleOnScreenNotifier3D] exits the screen. */
        readonly screen_exited: Signal<() => void>
    }
    /** Parent of all visual 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualinstance3d.html  
     */
    class VisualInstance3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /* gdvirtual */ _get_aabb(): AABB
        
        /** Sets the resource that is instantiated by this [VisualInstance3D], which changes how the engine handles the [VisualInstance3D] under the hood. Equivalent to [method RenderingServer.instance_set_base]. */
        set_base(base: RID): void
        
        /** Returns the RID of the resource associated with this [VisualInstance3D]. For example, if the Node is a [MeshInstance3D], this will return the RID of the associated [Mesh]. */
        get_base(): RID
        
        /** Returns the RID of this instance. This RID is the same as the RID returned by [method RenderingServer.instance_create]. This RID is needed if you want to call [RenderingServer] functions directly on this [VisualInstance3D]. */
        get_instance(): RID
        
        /** Based on [param value], enables or disables the specified layer in the [member layers], given a [param layer_number] between 1 and 20. */
        set_layer_mask_value(layer_number: int64, value: boolean): void
        
        /** Returns whether or not the specified layer of the [member layers] is enabled, given a [param layer_number] between 1 and 20. */
        get_layer_mask_value(layer_number: int64): boolean
        
        /** Returns the [AABB] (also known as the bounding box) for this [VisualInstance3D]. */
        get_aabb(): AABB
        
        /** The render layer(s) this [VisualInstance3D] is drawn on.  
         *  This object will only be visible for [Camera3D]s whose cull mask includes any of the render layers this [VisualInstance3D] is set to.  
         *  For [Light3D]s, this can be used to control which [VisualInstance3D]s are affected by a specific light. For [GPUParticles3D], this can be used to control which particles are effected by a specific attractor. For [Decal]s, this can be used to control which [VisualInstance3D]s are affected by a specific decal.  
         *  To adjust [member layers] more easily using a script, use [method get_layer_mask_value] and [method set_layer_mask_value].  
         *      
         *  **Note:** [VoxelGI], SDFGI and [LightmapGI] will always take all layers into account to determine what contributes to global illumination. If this is an issue, set [member GeometryInstance3D.gi_mode] to [constant GeometryInstance3D.GI_MODE_DISABLED] for meshes and [member Light3D.light_bake_mode] to [constant Light3D.BAKE_DISABLED] for lights to exclude them from global illumination.  
         */
        get layers(): int64
        set layers(value: int64)
        
        /** The amount by which the depth of this [VisualInstance3D] will be adjusted when sorting by depth. Uses the same units as the engine (which are typically meters). Adjusting it to a higher value will make the [VisualInstance3D] reliably draw on top of other [VisualInstance3D]s that are otherwise positioned at the same spot. To ensure it always draws on top of other objects around it (not positioned at the same spot), set the value to be greater than the distance between this [VisualInstance3D] and the other nearby [VisualInstance3D]s. */
        get sorting_offset(): float64
        set sorting_offset(value: float64)
        
        /** If `true`, the object is sorted based on the [AABB] center. The object will be sorted based on the global position otherwise.  
         *  The [AABB] center based sorting is generally more accurate for 3D models. The position based sorting instead allows to better control the drawing order when working with [GPUParticles3D] and [CPUParticles3D].  
         */
        get sorting_use_aabb_center(): boolean
        set sorting_use_aabb_center(value: boolean)
    }
    namespace VisualShader {
        enum Type {
            /** A vertex shader, operating on vertices. */
            TYPE_VERTEX = 0,
            
            /** A fragment shader, operating on fragments (pixels). */
            TYPE_FRAGMENT = 1,
            
            /** A shader for light calculations. */
            TYPE_LIGHT = 2,
            
            /** A function for the "start" stage of particle shader. */
            TYPE_START = 3,
            
            /** A function for the "process" stage of particle shader. */
            TYPE_PROCESS = 4,
            
            /** A function for the "collide" stage (particle collision handler) of particle shader. */
            TYPE_COLLIDE = 5,
            
            /** A function for the "start" stage of particle shader, with customized output. */
            TYPE_START_CUSTOM = 6,
            
            /** A function for the "process" stage of particle shader, with customized output. */
            TYPE_PROCESS_CUSTOM = 7,
            
            /** A shader for 3D environment's sky. */
            TYPE_SKY = 8,
            
            /** A compute shader that runs for each froxel of the volumetric fog map. */
            TYPE_FOG = 9,
            
            /** Represents the size of the [enum Type] enum. */
            TYPE_MAX = 10,
        }
        enum VaryingMode {
            /** Varying is passed from `Vertex` function to `Fragment` and `Light` functions. */
            VARYING_MODE_VERTEX_TO_FRAG_LIGHT = 0,
            
            /** Varying is passed from `Fragment` function to `Light` function. */
            VARYING_MODE_FRAG_TO_LIGHT = 1,
            
            /** Represents the size of the [enum VaryingMode] enum. */
            VARYING_MODE_MAX = 2,
        }
        enum VaryingType {
            /** Varying is of type [float]. */
            VARYING_TYPE_FLOAT = 0,
            
            /** Varying is of type [int]. */
            VARYING_TYPE_INT = 1,
            
            /** Varying is of type unsigned [int]. */
            VARYING_TYPE_UINT = 2,
            
            /** Varying is of type [Vector2]. */
            VARYING_TYPE_VECTOR_2D = 3,
            
            /** Varying is of type [Vector3]. */
            VARYING_TYPE_VECTOR_3D = 4,
            
            /** Varying is of type [Vector4]. */
            VARYING_TYPE_VECTOR_4D = 5,
            
            /** Varying is of type [bool]. */
            VARYING_TYPE_BOOLEAN = 6,
            
            /** Varying is of type [Transform3D]. */
            VARYING_TYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum VaryingType] enum. */
            VARYING_TYPE_MAX = 8,
        }
    }
    /** A custom shader program with a visual editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshader.html  
     */
    class VisualShader extends Shader {
        /** Indicates an invalid [VisualShader] node. */
        static readonly NODE_ID_INVALID = -1
        
        /** Indicates an output node of [VisualShader]. */
        static readonly NODE_ID_OUTPUT = 0
        constructor(identifier?: any)
        
        /** Sets the mode of this shader. */
        set_mode(mode: Shader.Mode): void
        
        /** Adds the specified [param node] to the shader. */
        add_node(type: VisualShader.Type, node: VisualShaderNode, position: Vector2, id: int64): void
        
        /** Returns the shader node instance with specified [param type] and [param id]. */
        get_node(type: VisualShader.Type, id: int64): null | VisualShaderNode
        
        /** Sets the position of the specified node. */
        set_node_position(type: VisualShader.Type, id: int64, position: Vector2): void
        
        /** Returns the position of the specified node within the shader graph. */
        get_node_position(type: VisualShader.Type, id: int64): Vector2
        
        /** Returns the list of all nodes in the shader with the specified type. */
        get_node_list(type: VisualShader.Type): PackedInt32Array
        
        /** Returns next valid node ID that can be added to the shader graph. */
        get_valid_node_id(type: VisualShader.Type): int64
        
        /** Removes the specified node from the shader. */
        remove_node(type: VisualShader.Type, id: int64): void
        
        /** Replaces the specified node with a node of new class type. */
        replace_node(type: VisualShader.Type, id: int64, new_class: StringName): void
        
        /** Returns `true` if the specified node and port connection exist. */
        is_node_connection(type: VisualShader.Type, from_node: int64, from_port: int64, to_node: int64, to_port: int64): boolean
        
        /** Returns `true` if the specified nodes and ports can be connected together. */
        can_connect_nodes(type: VisualShader.Type, from_node: int64, from_port: int64, to_node: int64, to_port: int64): boolean
        
        /** Connects the specified nodes and ports. */
        connect_nodes(type: VisualShader.Type, from_node: int64, from_port: int64, to_node: int64, to_port: int64): Error
        
        /** Connects the specified nodes and ports. */
        disconnect_nodes(type: VisualShader.Type, from_node: int64, from_port: int64, to_node: int64, to_port: int64): void
        
        /** Connects the specified nodes and ports, even if they can't be connected. Such connection is invalid and will not function properly. */
        connect_nodes_forced(type: VisualShader.Type, from_node: int64, from_port: int64, to_node: int64, to_port: int64): void
        
        /** Returns the list of connected nodes with the specified type. */
        get_node_connections(type: VisualShader.Type): GArray
        
        /** Attaches the given node to the given frame. */
        attach_node_to_frame(type: VisualShader.Type, id: int64, frame: int64): void
        
        /** Detaches the given node from the frame it is attached to. */
        detach_node_from_frame(type: VisualShader.Type, id: int64): void
        
        /** Adds a new varying value node to the shader. */
        add_varying(name: string, mode: VisualShader.VaryingMode, type: VisualShader.VaryingType): void
        
        /** Removes a varying value node with the given [param name]. Prints an error if a node with this name is not found. */
        remove_varying(name: string): void
        
        /** Returns `true` if the shader has a varying with the given [param name]. */
        has_varying(name: string): boolean
        _set_preview_shader_parameter(name: string, value: any): void
        _get_preview_shader_parameter(name: string): any
        _has_preview_shader_parameter(name: string): boolean
        _update_shader(): void
        
        /** The offset vector of the whole graph. */
        get graph_offset(): Vector2
        set graph_offset(value: Vector2)
    }
    namespace VisualShaderNode {
        enum PortType {
            /** Floating-point scalar. Translated to [code skip-lint]float` type in shader code. */
            PORT_TYPE_SCALAR = 0,
            
            /** Integer scalar. Translated to [code skip-lint]int` type in shader code. */
            PORT_TYPE_SCALAR_INT = 1,
            
            /** Unsigned integer scalar. Translated to [code skip-lint]uint` type in shader code. */
            PORT_TYPE_SCALAR_UINT = 2,
            
            /** 2D vector of floating-point values. Translated to [code skip-lint]vec2` type in shader code. */
            PORT_TYPE_VECTOR_2D = 3,
            
            /** 3D vector of floating-point values. Translated to [code skip-lint]vec3` type in shader code. */
            PORT_TYPE_VECTOR_3D = 4,
            
            /** 4D vector of floating-point values. Translated to [code skip-lint]vec4` type in shader code. */
            PORT_TYPE_VECTOR_4D = 5,
            
            /** Boolean type. Translated to [code skip-lint]bool` type in shader code. */
            PORT_TYPE_BOOLEAN = 6,
            
            /** Transform type. Translated to [code skip-lint]mat4` type in shader code. */
            PORT_TYPE_TRANSFORM = 7,
            
            /** Sampler type. Translated to reference of sampler uniform in shader code. Can only be used for input ports in non-uniform nodes. */
            PORT_TYPE_SAMPLER = 8,
            
            /** Represents the size of the [enum PortType] enum. */
            PORT_TYPE_MAX = 9,
        }
    }
    /** Base class for [VisualShader] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernode.html  
     */
    class VisualShaderNode extends Resource {
        constructor(identifier?: any)
        /** Returns the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph. */
        get_default_input_port(type: VisualShaderNode.PortType): int64
        _set_output_port_expanded(port: int64, _unnamed_arg1: boolean): void
        _is_output_port_expanded(_unnamed_arg0: int64): boolean
        
        /** Sets the default [param value] for the selected input [param port]. */
        set_input_port_default_value(port: int64, value: any, prev_value?: any /* = <any> {} */): void
        
        /** Returns the default value of the input [param port]. */
        get_input_port_default_value(port: int64): any
        
        /** Removes the default value of the input [param port]. */
        remove_input_port_default_value(port: int64): void
        
        /** Clears the default input ports value. */
        clear_default_input_values(): void
        
        /** Sets the output port index which will be showed for preview. If set to `-1` no port will be open for preview. */
        get output_port_for_preview(): int64
        set output_port_for_preview(value: int64)
        get default_input_values(): GArray
        set default_input_values(value: GArray)
        get expanded_output_ports(): GArray
        set expanded_output_ports(value: GArray)
        
        /** Represents the index of the frame this node is linked to. If set to `-1` the node is not linked to any frame. */
        get linked_parent_graph_frame(): int64
        set linked_parent_graph_frame(value: int64)
    }
    namespace VisualShaderNodeBillboard {
        enum BillboardType {
            /** Billboarding is disabled and the node does nothing. */
            BILLBOARD_TYPE_DISABLED = 0,
            
            /** A standard billboarding algorithm is enabled. */
            BILLBOARD_TYPE_ENABLED = 1,
            
            /** A billboarding algorithm to rotate around Y-axis is enabled. */
            BILLBOARD_TYPE_FIXED_Y = 2,
            
            /** A billboarding algorithm designed to use on particles is enabled. */
            BILLBOARD_TYPE_PARTICLES = 3,
            
            /** Represents the size of the [enum BillboardType] enum. */
            BILLBOARD_TYPE_MAX = 4,
        }
    }
    /** A node that controls how the object faces the camera to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodebillboard.html  
     */
    class VisualShaderNodeBillboard extends VisualShaderNode {
        constructor(identifier?: any)
        /** Controls how the object faces the camera. See [enum BillboardType]. */
        get billboard_type(): int64
        set billboard_type(value: int64)
        
        /** If `true`, the shader will keep the scale set for the mesh. Otherwise, the scale is lost when billboarding. */
        get keep_scale(): boolean
        set keep_scale(value: boolean)
    }
    /** A boolean constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodebooleanconstant.html  
     */
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A boolean constant which represents a state of this node. */
        get constant(): boolean
        set constant(value: boolean)
    }
    /** A boolean parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodebooleanparameter.html  
     */
    class VisualShaderNodeBooleanParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): boolean
        set default_value(value: boolean)
    }
    namespace VisualShaderNodeClamp {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_FLOAT = 0,
            
            /** An integer scalar. */
            OP_TYPE_INT = 1,
            
            /** An unsigned integer scalar. */
            OP_TYPE_UINT = 2,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 6,
        }
    }
    /** Clamps a value within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeclamp.html  
     */
    class VisualShaderNodeClamp extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    /** A [Color] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecolorconstant.html  
     */
    class VisualShaderNodeColorConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Color] constant which represents a state of this node. */
        get constant(): Color
        set constant(value: Color)
    }
    namespace VisualShaderNodeColorFunc {
        enum Function {
            /** Converts the color to grayscale using the following formula:  
             *    
             */
            FUNC_GRAYSCALE = 0,
            
            /** Converts HSV vector to RGB equivalent. */
            FUNC_HSV2RGB = 1,
            
            /** Converts RGB vector to HSV equivalent. */
            FUNC_RGB2HSV = 2,
            
            /** Applies sepia tone effect using the following formula:  
             *    
             */
            FUNC_SEPIA = 3,
            
            /** Converts color from linear color space to sRGB color space using the following formula:  
             *    
             *  The Compatibility renderer uses a simpler formula:  
             *    
             */
            FUNC_LINEAR_TO_SRGB = 4,
            
            /** Converts color from sRGB color space to linear color space using the following formula:  
             *    
             *  The Compatibility renderer uses a simpler formula:  
             *    
             */
            FUNC_SRGB_TO_LINEAR = 5,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 6,
        }
    }
    /** A [Color] function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecolorfunc.html  
     */
    class VisualShaderNodeColorFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the input color. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeColorOp {
        enum Operator {
            /** Produce a screen effect with the following formula:  
             *    
             */
            OP_SCREEN = 0,
            
            /** Produce a difference effect with the following formula:  
             *    
             */
            OP_DIFFERENCE = 1,
            
            /** Produce a darken effect with the following formula:  
             *    
             */
            OP_DARKEN = 2,
            
            /** Produce a lighten effect with the following formula:  
             *    
             */
            OP_LIGHTEN = 3,
            
            /** Produce an overlay effect with the following formula:  
             *    
             */
            OP_OVERLAY = 4,
            
            /** Produce a dodge effect with the following formula:  
             *    
             */
            OP_DODGE = 5,
            
            /** Produce a burn effect with the following formula:  
             *    
             */
            OP_BURN = 6,
            
            /** Produce a soft light effect with the following formula:  
             *    
             */
            OP_SOFT_LIGHT = 7,
            
            /** Produce a hard light effect with the following formula:  
             *    
             */
            OP_HARD_LIGHT = 8,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 9,
        }
    }
    /** A [Color] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecolorop.html  
     */
    class VisualShaderNodeColorOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** A [Color] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecolorparameter.html  
     */
    class VisualShaderNodeColorParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Color
        set default_value(value: Color)
    }
    /** Only exists for compatibility. Use [VisualShaderNodeFrame] as a replacement.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecomment.html  
     */
    class VisualShaderNodeComment extends VisualShaderNodeFrame {
        constructor(identifier?: any)
        /** This property only exists to preserve data authored in earlier versions of Godot. It has currently no function. */
        get description(): string
        set description(value: string)
    }
    namespace VisualShaderNodeCompare {
        enum ComparisonType {
            /** A floating-point scalar. */
            CTYPE_SCALAR = 0,
            
            /** An integer scalar. */
            CTYPE_SCALAR_INT = 1,
            
            /** An unsigned integer scalar. */
            CTYPE_SCALAR_UINT = 2,
            
            /** A 2D vector type. */
            CTYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            CTYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            CTYPE_VECTOR_4D = 5,
            
            /** A boolean type. */
            CTYPE_BOOLEAN = 6,
            
            /** A transform (`mat4`) type. */
            CTYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum ComparisonType] enum. */
            CTYPE_MAX = 8,
        }
        enum Function {
            /** Comparison for equality (`a == b`). */
            FUNC_EQUAL = 0,
            
            /** Comparison for inequality (`a != b`). */
            FUNC_NOT_EQUAL = 1,
            
            /** Comparison for greater than (`a > b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_GREATER_THAN = 2,
            
            /** Comparison for greater than or equal (`a >= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_GREATER_THAN_EQUAL = 3,
            
            /** Comparison for less than (`a < b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_LESS_THAN = 4,
            
            /** Comparison for less than or equal (`a <= b`). Cannot be used if [member type] set to [constant CTYPE_BOOLEAN] or [constant CTYPE_TRANSFORM]. */
            FUNC_LESS_THAN_EQUAL = 5,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 6,
        }
        enum Condition {
            /** The result will be `true` if all components in the vector satisfy the comparison condition. */
            COND_ALL = 0,
            
            /** The result will be `true` if any component in the vector satisfies the comparison condition. */
            COND_ANY = 1,
            
            /** Represents the size of the [enum Condition] enum. */
            COND_MAX = 2,
        }
    }
    /** A comparison function for common types within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecompare.html  
     */
    class VisualShaderNodeCompare extends VisualShaderNode {
        constructor(identifier?: any)
        /** The type to be used in the comparison. See [enum ComparisonType] for options. */
        get type(): int64
        set type(value: int64)
        
        /** A comparison function. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
        
        /** Extra condition which is applied if [member type] is set to [constant CTYPE_VECTOR_3D]. */
        get condition(): int64
        set condition(value: int64)
    }
    /** A base type for the constants within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeconstant.html  
     */
    class VisualShaderNodeConstant extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            /** Use the [Cubemap] set via [member cube_map]. If this is set to [member source], the `samplerCube` port is ignored. */
            SOURCE_TEXTURE = 0,
            
            /** Use the [Cubemap] sampler reference passed via the `samplerCube` port. If this is set to [member source], the [member cube_map] texture is ignored. */
            SOURCE_PORT = 1,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 2,
        }
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 3,
        }
    }
    /** A [Cubemap] sampling node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecubemap.html  
     */
    class VisualShaderNodeCubemap extends VisualShaderNode {
        constructor(identifier?: any)
        /** Defines which source should be used for the sampling. See [enum Source] for options. */
        get source(): int64
        set source(value: int64)
        
        /** The [Cubemap] texture to sample when using [constant SOURCE_TEXTURE] as [member source]. */
        get cube_map(): null | Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD
        set cube_map(value: null | Cubemap | CompressedCubemap | PlaceholderCubemap | TextureCubemapRD)
        
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        get texture_type(): int64
        set texture_type(value: int64)
    }
    /** A [Cubemap] parameter node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecubemapparameter.html  
     */
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs a [CurveTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecurvetexture.html  
     */
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** The source texture. */
        get texture(): null | CurveTexture
        set texture(value: null | CurveTexture)
    }
    /** Performs a [CurveXYZTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecurvexyztexture.html  
     */
    class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** The source texture. */
        get texture(): null | CurveXYZTexture
        set texture(value: null | CurveXYZTexture)
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodecustom.html  
     */
    class VisualShaderNodeCustom extends VisualShaderNode {
        constructor(identifier?: any)
        /** Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.  
         *  Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".  
         */
        /* gdvirtual */ _get_name(): string
        
        /** Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_description(): string
        
        /** Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.  
         *  Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.  
         */
        /* gdvirtual */ _get_category(): string
        
        /** Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, no return icon is shown.  
         */
        /* gdvirtual */ _get_return_icon_type(): VisualShaderNode.PortType
        
        /** Override this method to define the number of input ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no input ports.  
         */
        /* gdvirtual */ _get_input_port_count(): int64
        
        /** Override this method to define the returned type of each input port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _get_input_port_type(port: int64): VisualShaderNode.PortType
        
        /** Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.  
         */
        /* gdvirtual */ _get_input_port_name(port: int64): string
        
        /** Override this method to define the default value for the specified input port. Prefer use this over [method VisualShaderNode.set_input_port_default_value].  
         *  Defining this method is **required**. If not overridden, the node has no default values for their input ports.  
         */
        /* gdvirtual */ _get_input_port_default_value(port: int64): any
        
        /** Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.  
         *  Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.  
         */
        /* gdvirtual */ _get_default_input_port(type: VisualShaderNode.PortType): int64
        
        /** Override this method to define the number of output ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no output ports.  
         */
        /* gdvirtual */ _get_output_port_count(): int64
        
        /** Override this method to define the returned type of each output port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _get_output_port_type(port: int64): VisualShaderNode.PortType
        
        /** Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.  
         */
        /* gdvirtual */ _get_output_port_name(port: int64): string
        
        /** Override this method to define the number of the properties.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_count(): int64
        
        /** Override this method to define the names of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_name(index: int64): string
        
        /** Override this method to define the default index of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_default_index(index: int64): int64
        
        /** Override this method to define the options inside the drop-down list property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_options(index: int64): PackedStringArray
        
        /** Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  The [param input_vars] and [param output_vars] arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.  
         *  The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **required**.  
         */
        /* gdvirtual */ _get_code(input_vars: GArray, output_vars: GArray, mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_func_code(mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_global_code(mode: Shader.Mode): string
        
        /** Override this method to enable high-end mark in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, it's `false`.  
         */
        /* gdvirtual */ _is_highend(): boolean
        
        /** Override this method to prevent the node to be visible in the member dialog for the certain [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**. If not overridden, it's `true`.  
         */
        /* gdvirtual */ _is_available(mode: Shader.Mode, type: VisualShader.Type): boolean
        _set_input_port_default_value(port: int64, value: any): void
        _set_option_index(option: int64, value: int64): void
        
        /** Returns the selected index of the drop-down list option within a graph. You may use this function to define the specific behavior in the [method _get_code] or [method _get_global_code]. */
        get_option_index(option: int64): int64
        get initialized(): boolean
        set initialized(value: boolean)
        get properties(): string
        set properties(value: string)
    }
    namespace VisualShaderNodeDerivativeFunc {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
        enum Function {
            /** Sum of absolute derivative in `x` and `y`. */
            FUNC_SUM = 0,
            
            /** Derivative in `x` using local differencing. */
            FUNC_X = 1,
            
            /** Derivative in `y` using local differencing. */
            FUNC_Y = 2,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 3,
        }
        enum Precision {
            /** No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders. */
            PRECISION_NONE = 0,
            
            /** The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using [constant PRECISION_FINE], but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders. */
            PRECISION_COARSE = 1,
            
            /** The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using [constant PRECISION_COARSE], but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders. */
            PRECISION_FINE = 2,
            
            /** Represents the size of the [enum Precision] enum. */
            PRECISION_MAX = 3,
        }
    }
    /** Calculates a derivative within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodederivativefunc.html  
     */
    class VisualShaderNodeDerivativeFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. See [enum OpType] for options. */
        get op_type(): int64
        set op_type(value: int64)
        
        /** A derivative function type. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
        
        /** Sets the level of precision to use for the derivative function. See [enum Precision] for options. When using the Compatibility renderer, this setting has no effect. */
        get precision(): int64
        set precision(value: int64)
    }
    /** Calculates the determinant of a [Transform3D] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodedeterminant.html  
     */
    class VisualShaderNodeDeterminant extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node representing distance fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodedistancefade.html  
     */
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Calculates a dot product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodedotproduct.html  
     */
    class VisualShaderNodeDotProduct extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A custom visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeexpression.html  
     */
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        constructor(identifier?: any)
        /** An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants. */
        get expression(): string
        set expression(value: string)
    }
    /** Returns the vector that points in the same direction as a reference vector within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodefaceforward.html  
     */
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** A scalar floating-point constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodefloatconstant.html  
     */
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A floating-point constant which represents a state of this node. */
        get constant(): float64
        set constant(value: float64)
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            /** Returns the sine of the parameter. Translates to `sin(x)` in the Godot Shader Language. */
            FUNC_SIN = 0,
            
            /** Returns the cosine of the parameter. Translates to `cos(x)` in the Godot Shader Language. */
            FUNC_COS = 1,
            
            /** Returns the tangent of the parameter. Translates to `tan(x)` in the Godot Shader Language. */
            FUNC_TAN = 2,
            
            /** Returns the arc-sine of the parameter. Translates to `asin(x)` in the Godot Shader Language. */
            FUNC_ASIN = 3,
            
            /** Returns the arc-cosine of the parameter. Translates to `acos(x)` in the Godot Shader Language. */
            FUNC_ACOS = 4,
            
            /** Returns the arc-tangent of the parameter. Translates to `atan(x)` in the Godot Shader Language. */
            FUNC_ATAN = 5,
            
            /** Returns the hyperbolic sine of the parameter. Translates to `sinh(x)` in the Godot Shader Language. */
            FUNC_SINH = 6,
            
            /** Returns the hyperbolic cosine of the parameter. Translates to `cosh(x)` in the Godot Shader Language. */
            FUNC_COSH = 7,
            
            /** Returns the hyperbolic tangent of the parameter. Translates to `tanh(x)` in the Godot Shader Language. */
            FUNC_TANH = 8,
            
            /** Returns the natural logarithm of the parameter. Translates to `log(x)` in the Godot Shader Language. */
            FUNC_LOG = 9,
            
            /** Returns the natural exponentiation of the parameter. Translates to `exp(x)` in the Godot Shader Language. */
            FUNC_EXP = 10,
            
            /** Returns the square root of the parameter. Translates to `sqrt(x)` in the Godot Shader Language. */
            FUNC_SQRT = 11,
            
            /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
            FUNC_ABS = 12,
            
            /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
            FUNC_SIGN = 13,
            
            /** Finds the nearest integer less than or equal to the parameter. Translates to `floor(x)` in the Godot Shader Language. */
            FUNC_FLOOR = 14,
            
            /** Finds the nearest integer to the parameter. Translates to `round(x)` in the Godot Shader Language. */
            FUNC_ROUND = 15,
            
            /** Finds the nearest integer that is greater than or equal to the parameter. Translates to `ceil(x)` in the Godot Shader Language. */
            FUNC_CEIL = 16,
            
            /** Computes the fractional part of the argument. Translates to `fract(x)` in the Godot Shader Language. */
            FUNC_FRACT = 17,
            
            /** Clamps the value between `0.0` and `1.0` using `min(max(x, 0.0), 1.0)`. */
            FUNC_SATURATE = 18,
            
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 19,
            
            /** Returns the arc-hyperbolic-cosine of the parameter. Translates to `acosh(x)` in the Godot Shader Language. */
            FUNC_ACOSH = 20,
            
            /** Returns the arc-hyperbolic-sine of the parameter. Translates to `asinh(x)` in the Godot Shader Language. */
            FUNC_ASINH = 21,
            
            /** Returns the arc-hyperbolic-tangent of the parameter. Translates to `atanh(x)` in the Godot Shader Language. */
            FUNC_ATANH = 22,
            
            /** Convert a quantity in radians to degrees. Translates to `degrees(x)` in the Godot Shader Language. */
            FUNC_DEGREES = 23,
            
            /** Returns 2 raised by the power of the parameter. Translates to `exp2(x)` in the Godot Shader Language. */
            FUNC_EXP2 = 24,
            
            /** Returns the inverse of the square root of the parameter. Translates to `inversesqrt(x)` in the Godot Shader Language. */
            FUNC_INVERSE_SQRT = 25,
            
            /** Returns the base 2 logarithm of the parameter. Translates to `log2(x)` in the Godot Shader Language. */
            FUNC_LOG2 = 26,
            
            /** Convert a quantity in degrees to radians. Translates to `radians(x)` in the Godot Shader Language. */
            FUNC_RADIANS = 27,
            
            /** Finds reciprocal value of dividing 1 by `x` (i.e. `1 / x`). */
            FUNC_RECIPROCAL = 28,
            
            /** Finds the nearest even integer to the parameter. Translates to `roundEven(x)` in the Godot Shader Language. */
            FUNC_ROUNDEVEN = 29,
            
            /** Returns a value equal to the nearest integer to `x` whose absolute value is not larger than the absolute value of `x`. Translates to `trunc(x)` in the Godot Shader Language. */
            FUNC_TRUNC = 30,
            
            /** Subtracts scalar `x` from 1 (i.e. `1 - x`). */
            FUNC_ONEMINUS = 31,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 32,
        }
    }
    /** A scalar floating-point function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodefloatfunc.html  
     */
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language. */
            OP_MOD = 4,
            
            /** Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language. */
            OP_POW = 5,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 6,
            
            /** Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language. */
            OP_MIN = 7,
            
            /** Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language. */
            OP_ATAN2 = 8,
            
            /** Generates a step function by comparing `b`(x) to `a`(edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language. */
            OP_STEP = 9,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 10,
        }
    }
    /** A floating-point scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodefloatop.html  
     */
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            /** No hint used. */
            HINT_NONE = 0,
            
            /** A range hint for scalar value, which limits possible input values between [member min] and [member max]. Translated to `hint_range(min, max)` in shader code. */
            HINT_RANGE = 1,
            
            /** A range hint for scalar value with step, which limits possible input values between [member min] and [member max], with a step (increment) of [member step]). Translated to `hint_range(min, max, step)` in shader code. */
            HINT_RANGE_STEP = 2,
            
            /** Represents the size of the [enum Hint] enum. */
            HINT_MAX = 3,
        }
    }
    /** A scalar float parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodefloatparameter.html  
     */
    class VisualShaderNodeFloatParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** A hint applied to the uniform, which controls the values it can take when set through the Inspector. */
        get hint(): int64
        set hint(value: int64)
        
        /** Maximum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get min(): float64
        set min(value: float64)
        
        /** Minimum value for range hints. Used if [member hint] is set to [constant HINT_RANGE] or [constant HINT_RANGE_STEP]. */
        get max(): float64
        set max(value: float64)
        
        /** Step (increment) value for the range hint with step. Used if [member hint] is set to [constant HINT_RANGE_STEP]. */
        get step(): float64
        set step(value: float64)
        
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): float64
        set default_value(value: float64)
    }
    /** A frame other visual shader nodes can be attached to for better organization.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeframe.html  
     */
    class VisualShaderNodeFrame extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Adds a node to the list of nodes attached to the frame. Should not be called directly, use the [method VisualShader.attach_node_to_frame] method instead. */
        add_attached_node(node: int64): void
        
        /** Removes a node from the list of nodes attached to the frame. Should not be called directly, use the [method VisualShader.detach_node_from_frame] method instead. */
        remove_attached_node(node: int64): void
        
        /** The title of the node. */
        get title(): string
        set title(value: string)
        
        /** If `true`, the frame will be tinted with the color specified in [member tint_color]. */
        get tint_color_enabled(): boolean
        set tint_color_enabled(value: boolean)
        
        /** The color of the frame when [member tint_color_enabled] is `true`. */
        get tint_color(): Color
        set tint_color(value: Color)
        
        /** If `true`, the frame will automatically resize to enclose all attached nodes. */
        get autoshrink(): boolean
        set autoshrink(value: boolean)
        
        /** The list of nodes attached to the frame. */
        get attached_nodes(): PackedInt32Array
        set attached_nodes(value: PackedInt32Array | int32[])
    }
    /** A Fresnel effect to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodefresnel.html  
     */
    class VisualShaderNodeFresnel extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A custom global visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeglobalexpression.html  
     */
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
        constructor(identifier?: any)
    }
    /** Base class for a family of nodes with variable number of input and output ports within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodegroupbase.html  
     */
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        constructor(identifier?: any)
        /** Defines all input ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_input_port]). */
        set_inputs(inputs: string): void
        
        /** Returns a [String] description of the input ports as a colon-separated list using the format `id,type,name;` (see [method add_input_port]). */
        get_inputs(): string
        
        /** Defines all output ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_output_port]). */
        set_outputs(outputs: string): void
        
        /** Returns a [String] description of the output ports as a colon-separated list using the format `id,type,name;` (see [method add_output_port]). */
        get_outputs(): string
        
        /** Returns `true` if the specified port name does not override an existed port name and is valid within the shader. */
        is_valid_port_name(name: string): boolean
        
        /** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_input_port(id: int64, type: int64, name: string): void
        
        /** Removes the specified input port. */
        remove_input_port(id: int64): void
        
        /** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
        get_input_port_count(): int64
        
        /** Returns `true` if the specified input port exists. */
        has_input_port(id: int64): boolean
        
        /** Removes all previously specified input ports. */
        clear_input_ports(): void
        
        /** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_output_port(id: int64, type: int64, name: string): void
        
        /** Removes the specified output port. */
        remove_output_port(id: int64): void
        
        /** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
        get_output_port_count(): int64
        
        /** Returns `true` if the specified output port exists. */
        has_output_port(id: int64): boolean
        
        /** Removes all previously specified output ports. */
        clear_output_ports(): void
        
        /** Renames the specified input port. */
        set_input_port_name(id: int64, name: string): void
        
        /** Sets the specified input port's type (see [enum VisualShaderNode.PortType]). */
        set_input_port_type(id: int64, type: int64): void
        
        /** Renames the specified output port. */
        set_output_port_name(id: int64, name: string): void
        
        /** Sets the specified output port's type (see [enum VisualShaderNode.PortType]). */
        set_output_port_type(id: int64, type: int64): void
        
        /** Returns a free input port ID which can be used in [method add_input_port]. */
        get_free_input_port_id(): int64
        
        /** Returns a free output port ID which can be used in [method add_output_port]. */
        get_free_output_port_id(): int64
    }
    /** Outputs a 3D vector based on the result of a floating-point comparison within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeif.html  
     */
    class VisualShaderNodeIf extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Represents the input shader parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeinput.html  
     */
    class VisualShaderNodeInput extends VisualShaderNode {
        constructor(identifier?: any)
        /** Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the [member input_name] equal to `"albedo"`. */
        get_input_real_name(): string
        
        /** One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`). */
        get input_name(): StringName
        set input_name(value: StringName)
        
        /** Emitted when input is changed via [member input_name]. */
        readonly input_type_changed: Signal<() => void>
    }
    /** A scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeintconstant.html  
     */
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** An integer constant which represents a state of this node. */
        get constant(): int64
        set constant(value: int64)
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
            FUNC_ABS = 0,
            
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 1,
            
            /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
            FUNC_SIGN = 2,
            
            /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
            FUNC_BITWISE_NOT = 3,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 4,
        }
    }
    /** A scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeintfunc.html  
     */
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers using `a % b`. */
            OP_MOD = 4,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 5,
            
            /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MIN = 6,
            
            /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
            OP_BITWISE_AND = 7,
            
            /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
            OP_BITWISE_OR = 8,
            
            /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
            OP_BITWISE_XOR = 9,
            
            /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
            OP_BITWISE_LEFT_SHIFT = 10,
            
            /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
            OP_BITWISE_RIGHT_SHIFT = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** An integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeintop.html  
     */
    class VisualShaderNodeIntOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            /** The parameter will not constrain its value. */
            HINT_NONE = 0,
            
            /** The parameter's value must be within the specified [member min]/[member max] range. */
            HINT_RANGE = 1,
            
            /** The parameter's value must be within the specified range, with the given [member step] between values. */
            HINT_RANGE_STEP = 2,
            
            /** The parameter uses an enum to associate preset values to names in the editor. */
            HINT_ENUM = 3,
            
            /** Represents the size of the [enum Hint] enum. */
            HINT_MAX = 4,
        }
    }
    /** A visual shader node for shader parameter (uniform) of type [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeintparameter.html  
     */
    class VisualShaderNodeIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Range hint of this node. Use it to customize valid parameter range. */
        get hint(): int64
        set hint(value: int64)
        
        /** The minimum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get min(): int64
        set min(value: int64)
        
        /** The maximum value this parameter can take. [member hint] must be either [constant HINT_RANGE] or [constant HINT_RANGE_STEP] for this to take effect. */
        get max(): int64
        set max(value: int64)
        
        /** The step between parameter's values. Forces the parameter to be a multiple of the given value. [member hint] must be [constant HINT_RANGE_STEP] for this to take effect. */
        get step(): int64
        set step(value: int64)
        
        /** The names used for the enum select in the editor. [member hint] must be [constant HINT_ENUM] for this to take effect. */
        get enum_names(): PackedStringArray
        set enum_names(value: PackedStringArray | string[])
        
        /** If `true`, the node will have a custom default value. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get default_value(): int64
        set default_value(value: int64)
    }
    namespace VisualShaderNodeIs {
        enum Function {
            /** Comparison with `INF` (Infinity). */
            FUNC_IS_INF = 0,
            
            /** Comparison with `NaN` (Not a Number; indicates invalid numeric results, such as division by zero). */
            FUNC_IS_NAN = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** A boolean comparison operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeis.html  
     */
    class VisualShaderNodeIs extends VisualShaderNode {
        constructor(identifier?: any)
        /** The comparison function. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    /** A visual shader node that returns the depth value of the DEPTH_TEXTURE node in a linear space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodelinearscenedepth.html  
     */
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `a` and `b` ports use a 2D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `a` and `b` ports use a 3D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Linearly interpolates between two values within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodemix.html  
     */
    class VisualShaderNodeMix extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
    }
    /** Performs a fused multiply-add operation within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodemultiplyadd.html  
     */
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    /** Calculates an outer product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeouterproduct.html  
     */
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Represents the output shader parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeoutput.html  
     */
    class VisualShaderNodeOutput extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            /** The parameter will be tied to the [ShaderMaterial] using this shader. */
            QUAL_NONE = 0,
            
            /** The parameter will use a global value, defined in Project Settings. */
            QUAL_GLOBAL = 1,
            
            /** The parameter will be tied to the node with attached [ShaderMaterial] using this shader. */
            QUAL_INSTANCE = 2,
            
            /** Represents the size of the [enum Qualifier] enum. */
            QUAL_MAX = 3,
        }
    }
    /** A base type for the parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparameter.html  
     */
    class VisualShaderNodeParameter extends VisualShaderNode {
        constructor(identifier?: any)
        /** Name of the parameter, by which it can be accessed through the [ShaderMaterial] properties. */
        get parameter_name(): StringName
        set parameter_name(value: StringName)
        
        /** Defines the scope of the parameter. */
        get qualifier(): int64
        set qualifier(value: int64)
    }
    /** A reference to an existing [VisualShaderNodeParameter].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparameterref.html  
     */
    class VisualShaderNodeParameterRef extends VisualShaderNode {
        constructor(identifier?: any)
        /** The name of the parameter which this reference points to. */
        get parameter_name(): StringName
        set parameter_name(value: StringName)
        get param_type(): int64
        set param_type(value: int64)
    }
    namespace VisualShaderNodeParticleAccelerator {
        enum Mode {
            /** The particles will be accelerated based on their velocity. */
            MODE_LINEAR = 0,
            
            /** The particles will be accelerated towards or away from the center. */
            MODE_RADIAL = 1,
            
            /** The particles will be accelerated tangentially to the radius vector from center to their position. */
            MODE_TANGENTIAL = 2,
            
            /** Represents the size of the [enum Mode] enum. */
            MODE_MAX = 3,
        }
    }
    /** A visual shader node that accelerates particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleaccelerator.html  
     */
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        constructor(identifier?: any)
        /** Defines in what manner the particles will be accelerated. */
        get mode(): int64
        set mode(value: int64)
    }
    /** A visual shader node that makes particles emitted in a box shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleboxemitter.html  
     */
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node that makes particles move in a cone shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleconevelocity.html  
     */
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            /** If enabled, the particle starts with the position defined by this node. */
            EMIT_FLAG_POSITION = 1,
            
            /** If enabled, the particle starts with the rotation and scale defined by this node. */
            EMIT_FLAG_ROT_SCALE = 2,
            
            /** If enabled,the particle starts with the velocity defined by this node. */
            EMIT_FLAG_VELOCITY = 4,
            
            /** If enabled, the particle starts with the color defined by this node. */
            EMIT_FLAG_COLOR = 8,
            
            /** If enabled, the particle starts with the `CUSTOM` data defined by this node. */
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    /** A visual shader node that forces to emit a particle from a sub-emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleemit.html  
     */
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        constructor(identifier?: any)
        /** Flags used to override the properties defined in the sub-emitter's process material. */
        get flags(): int64
        set flags(value: int64)
    }
    /** A base class for particle emitters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleemitter.html  
     */
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        constructor(identifier?: any)
        /** If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space. */
        get mode_2d(): boolean
        set mode_2d(value: boolean)
    }
    /** A visual shader node that makes particles emitted in a shape defined by a [Mesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticlemeshemitter.html  
     */
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
        /** The [Mesh] that defines emission shape. */
        get mesh(): null | Mesh
        set mesh(value: null | Mesh)
        
        /** If `true`, the particles will emit from all surfaces of the mesh. */
        get use_all_surfaces(): boolean
        set use_all_surfaces(value: boolean)
        
        /** Index of the surface that emits particles. [member use_all_surfaces] must be `false` for this to take effect. */
        get surface_index(): int64
        set surface_index(value: int64)
    }
    /** A visual shader helper node for multiplying position and rotation of particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticlemultiplybyaxisangle.html  
     */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        constructor(identifier?: any)
        /** If `true`, the angle will be interpreted in degrees instead of radians. */
        get degrees_mode(): boolean
        set degrees_mode(value: boolean)
    }
    /** Visual shader node that defines output values for particle emitting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleoutput.html  
     */
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
    }
    /** Visual shader node for randomizing particle values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticlerandomness.html  
     */
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    /** A visual shader node that makes particles emitted in a ring shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticleringemitter.html  
     */
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node that makes particles emitted in a sphere shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeparticlesphereemitter.html  
     */
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
        constructor(identifier?: any)
    }
    /** A visual shader node representing proximity fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeproximityfade.html  
     */
    class VisualShaderNodeProximityFade extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node that generates a pseudo-random scalar.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernoderandomrange.html  
     */
    class VisualShaderNodeRandomRange extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeRemap {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `value` port uses a 2D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `value` port uses a 3D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `value` port uses a 4D vector type, while the `input min`, `input max`, `output min`, and `output max` ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** A visual shader node for remap function.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernoderemap.html  
     */
    class VisualShaderNodeRemap extends VisualShaderNode {
        constructor(identifier?: any)
        get op_type(): int64
        set op_type(value: int64)
    }
    /** A node that allows rerouting a connection within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodereroute.html  
     */
    class VisualShaderNodeReroute extends VisualShaderNode {
        constructor(identifier?: any)
        get port_type(): int64
        set port_type(value: int64)
    }
    /** Base class for resizable nodes in a visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernoderesizablebase.html  
     */
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        constructor(identifier?: any)
        /** The size of the node in the visual shader graph. */
        get size(): Vector2
        set size(value: Vector2)
    }
    /** A visual shader node that modifies the rotation of the object using a rotation matrix.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernoderotationbyaxis.html  
     */
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** SDF raymarching algorithm to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodesdfraymarch.html  
     */
    class VisualShaderNodeSDFRaymarch extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A function to convert an SDF (signed-distance field) to screen UV, to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodesdftoscreenuv.html  
     */
    class VisualShaderNodeSDFToScreenUV extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            /** Creates internal uniform and provides a way to assign it within node. */
            SOURCE_TEXTURE = 0,
            
            /** Use the uniform texture from sampler port. */
            SOURCE_PORT = 1,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 2,
        }
    }
    /** A base node for nodes which samples 3D textures in the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodesample3d.html  
     */
    class VisualShaderNodeSample3D extends VisualShaderNode {
        constructor(identifier?: any)
        /** An input source type. */
        get source(): int64
        set source(value: int64)
    }
    /** A visual shader node that unpacks the screen normal texture in World Space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodescreennormalworldspace.html  
     */
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A function to convert screen UV to an SDF (signed-distance field), to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodescreenuvtosdf.html  
     */
    class VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `x` port uses a 2D vector type. The first two ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `x` port uses a 3D vector type. The first two ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a SmoothStep function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodesmoothstep.html  
     */
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a Step function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodestep.html  
     */
    class VisualShaderNodeStep extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    namespace VisualShaderNodeSwitch {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_FLOAT = 0,
            
            /** An integer scalar. */
            OP_TYPE_INT = 1,
            
            /** An unsigned integer scalar. */
            OP_TYPE_UINT = 2,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 3,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** A boolean type. */
            OP_TYPE_BOOLEAN = 6,
            
            /** A transform type. */
            OP_TYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 8,
        }
    }
    /** A selector function for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeswitch.html  
     */
    class VisualShaderNodeSwitch extends VisualShaderNode {
        constructor(identifier?: any)
        /** A type of operands and returned value. */
        get op_type(): int64
        set op_type(value: int64)
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            /** Use the texture given as an argument for this function. */
            SOURCE_TEXTURE = 0,
            
            /** Use the current viewport's texture as the source. */
            SOURCE_SCREEN = 1,
            
            /** Use the texture from this shader's texture built-in (e.g. a texture of a [Sprite2D]). */
            SOURCE_2D_TEXTURE = 2,
            
            /** Use the texture from this shader's normal map built-in. */
            SOURCE_2D_NORMAL = 3,
            
            /** Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers). */
            SOURCE_DEPTH = 4,
            
            /** Use the texture provided in the input port for this function. */
            SOURCE_PORT = 5,
            
            /** Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
            SOURCE_3D_NORMAL = 6,
            
            /** Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
            SOURCE_ROUGHNESS = 7,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 8,
        }
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 3,
        }
    }
    /** Performs a 2D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexture.html  
     */
    class VisualShaderNodeTexture extends VisualShaderNode {
        constructor(identifier?: any)
        /** Determines the source for the lookup. See [enum Source] for options. */
        get source(): int64
        set source(value: int64)
        
        /** The source texture, if needed for the selected [member source]. */
        get texture(): null | Texture2D
        set texture(value: null | Texture2D)
        
        /** Specifies the type of the texture if [member source] is set to [constant SOURCE_TEXTURE]. See [enum TextureType] for options. */
        get texture_type(): int64
        set texture_type(value: int64)
    }
    /** A 2D texture uniform array to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexture2darray.html  
     */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        /** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get texture_array(): null | Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD
        set texture_array(value: null | Texture2DArray | CompressedTexture2DArray | PlaceholderTexture2DArray | Texture2DArrayRD)
    }
    /** A visual shader node for shader parameter (uniform) of type [Texture2DArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexture2darrayparameter.html  
     */
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Provides a 2D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexture2dparameter.html  
     */
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs a 3D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexture3d.html  
     */
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        constructor(identifier?: any)
        /** A source texture. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        get texture(): null | Texture3D
        set texture(value: null | Texture3D)
    }
    /** Provides a 3D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexture3dparameter.html  
     */
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap. */
            TYPE_ANISOTROPY = 3,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 4,
        }
        enum ColorDefault {
            /** Defaults to fully opaque white color. */
            COLOR_DEFAULT_WHITE = 0,
            
            /** Defaults to fully opaque black color. */
            COLOR_DEFAULT_BLACK = 1,
            
            /** Defaults to fully transparent black color. */
            COLOR_DEFAULT_TRANSPARENT = 2,
            
            /** Represents the size of the [enum ColorDefault] enum. */
            COLOR_DEFAULT_MAX = 3,
        }
        enum TextureFilter {
            /** Sample the texture using the filter determined by the node this shader is attached to. */
            FILTER_DEFAULT = 0,
            
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            FILTER_NEAREST = 1,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            FILTER_LINEAR = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            FILTER_NEAREST_MIPMAP = 3,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            FILTER_LINEAR_MIPMAP = 4,
            
            /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_NEAREST_MIPMAP] is usually more appropriate in this case.  
             */
            FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5,
            
            /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_LINEAR_MIPMAP] is usually more appropriate in this case.  
             */
            FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6,
            
            /** Represents the size of the [enum TextureFilter] enum. */
            FILTER_MAX = 7,
        }
        enum TextureRepeat {
            /** Sample the texture using the repeat mode determined by the node this shader is attached to. */
            REPEAT_DEFAULT = 0,
            
            /** Texture will repeat normally. */
            REPEAT_ENABLED = 1,
            
            /** Texture will not repeat. */
            REPEAT_DISABLED = 2,
            
            /** Represents the size of the [enum TextureRepeat] enum. */
            REPEAT_MAX = 3,
        }
        enum TextureSource {
            /** The texture source is not specified in the shader. */
            SOURCE_NONE = 0,
            
            /** The texture source is the screen texture which captures all opaque objects drawn this frame. */
            SOURCE_SCREEN = 1,
            
            /** The texture source is the depth texture from the depth prepass. */
            SOURCE_DEPTH = 2,
            
            /** The texture source is the normal-roughness buffer from the depth prepass. */
            SOURCE_NORMAL_ROUGHNESS = 3,
            
            /** Represents the size of the [enum TextureSource] enum. */
            SOURCE_MAX = 4,
        }
    }
    /** Performs a uniform texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetextureparameter.html  
     */
    class VisualShaderNodeTextureParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Defines the type of data provided by the source texture. See [enum TextureType] for options. */
        get texture_type(): int64
        set texture_type(value: int64)
        
        /** Sets the default color if no texture is assigned to the uniform. */
        get color_default(): int64
        set color_default(value: int64)
        
        /** Sets the texture filtering mode. See [enum TextureFilter] for options. */
        get texture_filter(): int64
        set texture_filter(value: int64)
        
        /** Sets the texture repeating mode. See [enum TextureRepeat] for options. */
        get texture_repeat(): int64
        set texture_repeat(value: int64)
        
        /** Sets the texture source mode. Used for reading from the screen, depth, or normal_roughness texture. See [enum TextureSource] for options. */
        get texture_source(): int64
        set texture_source(value: int64)
    }
    /** Performs a uniform texture lookup with triplanar within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetextureparametertriplanar.html  
     */
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
        constructor(identifier?: any)
    }
    /** Performs an SDF (signed-distance field) texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexturesdf.html  
     */
    class VisualShaderNodeTextureSDF extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Performs an SDF (signed-distance field) normal texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetexturesdfnormal.html  
     */
    class VisualShaderNodeTextureSDFNormal extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** Composes a [Transform3D] from four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformcompose.html  
     */
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A [Transform3D] constant for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformconstant.html  
     */
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Transform3D] constant which represents the state of this node. */
        get constant(): Transform3D
        set constant(value: Transform3D)
    }
    /** Decomposes a [Transform3D] into four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformdecompose.html  
     */
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            /** Perform the inverse operation on the [Transform3D] matrix. */
            FUNC_INVERSE = 0,
            
            /** Perform the transpose operation on the [Transform3D] matrix. */
            FUNC_TRANSPOSE = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** Computes a [Transform3D] function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformfunc.html  
     */
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** The function to be computed. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            /** Multiplies transform `a` by the transform `b`. */
            OP_AxB = 0,
            
            /** Multiplies transform `b` by the transform `a`. */
            OP_BxA = 1,
            
            /** Performs a component-wise multiplication of transform `a` by the transform `b`. */
            OP_AxB_COMP = 2,
            
            /** Performs a component-wise multiplication of transform `b` by the transform `a`. */
            OP_BxA_COMP = 3,
            
            /** Adds two transforms. */
            OP_ADD = 4,
            
            /** Subtracts the transform `a` from the transform `b`. */
            OP_A_MINUS_B = 5,
            
            /** Subtracts the transform `b` from the transform `a`. */
            OP_B_MINUS_A = 6,
            
            /** Divides the transform `a` by the transform `b`. */
            OP_A_DIV_B = 7,
            
            /** Divides the transform `b` by the transform `a`. */
            OP_B_DIV_A = 8,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 9,
        }
    }
    /** A [Transform3D] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformop.html  
     */
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** The type of the operation to be performed on the transforms. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** A [Transform3D] parameter for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformparameter.html  
     */
    class VisualShaderNodeTransformParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Transform3D
        set default_value(value: Transform3D)
    }
    namespace VisualShaderNodeTransformVecMult {
        enum Operator {
            /** Multiplies transform `a` by the vector `b`. */
            OP_AxB = 0,
            
            /** Multiplies vector `b` by the transform `a`. */
            OP_BxA = 1,
            
            /** Multiplies transform `a` by the vector `b`, skipping the last row and column of the transform. */
            OP_3x3_AxB = 2,
            
            /** Multiplies vector `b` by the transform `a`, skipping the last row and column of the transform. */
            OP_3x3_BxA = 3,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 4,
        }
    }
    /** Multiplies a [Transform3D] and a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodetransformvecmult.html  
     */
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        constructor(identifier?: any)
        /** The multiplication type to be performed. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** An unsigned scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeuintconstant.html  
     */
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** An unsigned integer constant which represents a state of this node. */
        get constant(): int64
        set constant(value: int64)
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 0,
            
            /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
            FUNC_BITWISE_NOT = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** An unsigned scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeuintfunc.html  
     */
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the scalar. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers using `a % b`. */
            OP_MOD = 4,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 5,
            
            /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MIN = 6,
            
            /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
            OP_BITWISE_AND = 7,
            
            /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
            OP_BITWISE_OR = 8,
            
            /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
            OP_BITWISE_XOR = 9,
            
            /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
            OP_BITWISE_LEFT_SHIFT = 10,
            
            /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
            OP_BITWISE_RIGHT_SHIFT = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** An unsigned integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeuintop.html  
     */
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        constructor(identifier?: any)
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** A visual shader node for shader parameter (uniform) of type unsigned [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeuintparameter.html  
     */
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** If `true`, the node will have a custom default value. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        get default_value(): int64
        set default_value(value: int64)
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            /** Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default. */
            FUNC_PANNING = 0,
            
            /** Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default. */
            FUNC_SCALING = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeuvfunc.html  
     */
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        constructor(identifier?: any)
        /** A function to be applied to the texture coordinates. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    /** A visual shader node that modifies the texture UV using polar coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeuvpolarcoord.html  
     */
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
        constructor(identifier?: any)
    }
    /** A visual shader node that represents a "varying" shader value.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevarying.html  
     */
    class VisualShaderNodeVarying extends VisualShaderNode {
        constructor(identifier?: any)
        /** Name of the variable. Must be unique. */
        get varying_name(): StringName
        set varying_name(value: StringName)
        
        /** Type of the variable. Determines where the variable can be accessed. */
        get varying_type(): int64
        set varying_type(value: int64)
    }
    /** A visual shader node that gets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevaryinggetter.html  
     */
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
    }
    /** A visual shader node that sets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevaryingsetter.html  
     */
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
        constructor(identifier?: any)
    }
    /** A [Vector2] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevec2constant.html  
     */
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Vector2] constant which represents the state of this node. */
        get constant(): Vector2
        set constant(value: Vector2)
    }
    /** A [Vector2] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevec2parameter.html  
     */
    class VisualShaderNodeVec2Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Vector2
        set default_value(value: Vector2)
    }
    /** A [Vector3] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevec3constant.html  
     */
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A [Vector3] constant which represents the state of this node. */
        get constant(): Vector3
        set constant(value: Vector3)
    }
    /** A [Vector3] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevec3parameter.html  
     */
    class VisualShaderNodeVec3Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Vector3
        set default_value(value: Vector3)
    }
    /** A 4D vector constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevec4constant.html  
     */
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        constructor(identifier?: any)
        /** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
        get constant(): Quaternion
        set constant(value: Quaternion)
        get constant_v4(): Vector4
        set constant_v4(value: Vector4)
    }
    /** A 4D vector parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevec4parameter.html  
     */
    class VisualShaderNodeVec4Parameter extends VisualShaderNodeParameter {
        constructor(identifier?: any)
        /** Enables usage of the [member default_value]. */
        get default_value_enabled(): boolean
        set default_value_enabled(value: boolean)
        
        /** A default value to be assigned within the shader. */
        get default_value(): Vector4
        set default_value(value: Vector4)
    }
    namespace VisualShaderNodeVectorBase {
        enum OpType {
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 0,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 1,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 2,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 3,
        }
    }
    /** A base type for the nodes that perform vector operations within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectorbase.html  
     */
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        constructor(identifier?: any)
        /** A vector type that this operation is performed on. */
        get op_type(): int64
        set op_type(value: int64)
    }
    /** Composes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) from scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectorcompose.html  
     */
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** Decomposes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) into scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectordecompose.html  
     */
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** Returns the distance between two points. To be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectordistance.html  
     */
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            /** Normalizes the vector so that it has a length of `1` but points in the same direction. */
            FUNC_NORMALIZE = 0,
            
            /** Clamps the value between `0.0` and `1.0`. */
            FUNC_SATURATE = 1,
            
            /** Returns the opposite value of the parameter. */
            FUNC_NEGATE = 2,
            
            /** Returns `1/vector`. */
            FUNC_RECIPROCAL = 3,
            
            /** Returns the absolute value of the parameter. */
            FUNC_ABS = 4,
            
            /** Returns the arc-cosine of the parameter. */
            FUNC_ACOS = 5,
            
            /** Returns the inverse hyperbolic cosine of the parameter. */
            FUNC_ACOSH = 6,
            
            /** Returns the arc-sine of the parameter. */
            FUNC_ASIN = 7,
            
            /** Returns the inverse hyperbolic sine of the parameter. */
            FUNC_ASINH = 8,
            
            /** Returns the arc-tangent of the parameter. */
            FUNC_ATAN = 9,
            
            /** Returns the inverse hyperbolic tangent of the parameter. */
            FUNC_ATANH = 10,
            
            /** Finds the nearest integer that is greater than or equal to the parameter. */
            FUNC_CEIL = 11,
            
            /** Returns the cosine of the parameter. */
            FUNC_COS = 12,
            
            /** Returns the hyperbolic cosine of the parameter. */
            FUNC_COSH = 13,
            
            /** Converts a quantity in radians to degrees. */
            FUNC_DEGREES = 14,
            
            /** Base-e Exponential. */
            FUNC_EXP = 15,
            
            /** Base-2 Exponential. */
            FUNC_EXP2 = 16,
            
            /** Finds the nearest integer less than or equal to the parameter. */
            FUNC_FLOOR = 17,
            
            /** Computes the fractional part of the argument. */
            FUNC_FRACT = 18,
            
            /** Returns the inverse of the square root of the parameter. */
            FUNC_INVERSE_SQRT = 19,
            
            /** Natural logarithm. */
            FUNC_LOG = 20,
            
            /** Base-2 logarithm. */
            FUNC_LOG2 = 21,
            
            /** Converts a quantity in degrees to radians. */
            FUNC_RADIANS = 22,
            
            /** Finds the nearest integer to the parameter. */
            FUNC_ROUND = 23,
            
            /** Finds the nearest even integer to the parameter. */
            FUNC_ROUNDEVEN = 24,
            
            /** Extracts the sign of the parameter, i.e. returns `-1` if the parameter is negative, `1` if it's positive and `0` otherwise. */
            FUNC_SIGN = 25,
            
            /** Returns the sine of the parameter. */
            FUNC_SIN = 26,
            
            /** Returns the hyperbolic sine of the parameter. */
            FUNC_SINH = 27,
            
            /** Returns the square root of the parameter. */
            FUNC_SQRT = 28,
            
            /** Returns the tangent of the parameter. */
            FUNC_TAN = 29,
            
            /** Returns the hyperbolic tangent of the parameter. */
            FUNC_TANH = 30,
            
            /** Returns a value equal to the nearest integer to the parameter whose absolute value is not larger than the absolute value of the parameter. */
            FUNC_TRUNC = 31,
            
            /** Returns `1.0 - vector`. */
            FUNC_ONEMINUS = 32,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 33,
        }
    }
    /** A vector function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectorfunc.html  
     */
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** The function to be performed. See [enum Function] for options. */
        get "function"(): int64
        set "function"(value: int64)
    }
    /** Returns the length of a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectorlen.html  
     */
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            /** Adds two vectors. */
            OP_ADD = 0,
            
            /** Subtracts a vector from a vector. */
            OP_SUB = 1,
            
            /** Multiplies two vectors. */
            OP_MUL = 2,
            
            /** Divides vector by vector. */
            OP_DIV = 3,
            
            /** Returns the remainder of the two vectors. */
            OP_MOD = 4,
            
            /** Returns the value of the first parameter raised to the power of the second, for each component of the vectors. */
            OP_POW = 5,
            
            /** Returns the greater of two values, for each component of the vectors. */
            OP_MAX = 6,
            
            /** Returns the lesser of two values, for each component of the vectors. */
            OP_MIN = 7,
            
            /** Calculates the cross product of two vectors. */
            OP_CROSS = 8,
            
            /** Returns the arc-tangent of the parameters. */
            OP_ATAN2 = 9,
            
            /** Returns the vector that points in the direction of reflection. `a` is incident vector and `b` is the normal vector. */
            OP_REFLECT = 10,
            
            /** Vector step operator. Returns `0.0` if `a` is smaller than `b` and `1.0` otherwise. */
            OP_STEP = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** A vector operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectorop.html  
     */
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
        /** The operator to be used. See [enum Operator] for options. */
        get operator(): int64
        set operator(value: int64)
    }
    /** Returns the vector that points in the direction of refraction. For use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodevectorrefract.html  
     */
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
        constructor(identifier?: any)
    }
    /** A visual shader node that calculates the position of the pixel in world space using the depth texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_visualshadernodeworldpositionfromdepth.html  
     */
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
        constructor(identifier?: any)
    }
    namespace VoxelGI {
        enum Subdiv {
            /** Use 64 subdivisions. This is the lowest quality setting, but the fastest. Use it if you can, but especially use it on lower-end hardware. */
            SUBDIV_64 = 0,
            
            /** Use 128 subdivisions. This is the default quality setting. */
            SUBDIV_128 = 1,
            
            /** Use 256 subdivisions. */
            SUBDIV_256 = 2,
            
            /** Use 512 subdivisions. This is the highest quality setting, but the slowest. On lower-end hardware, this could cause the GPU to stall. */
            SUBDIV_512 = 3,
            
            /** Represents the size of the [enum Subdiv] enum. */
            SUBDIV_MAX = 4,
        }
    }
    /** Real-time global illumination (GI) probe.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_voxelgi.html  
     */
    class VoxelGI<Map extends NodePathMap = any> extends VisualInstance3D<Map> {
        constructor(identifier?: any)
        /** Bakes the effect from all [GeometryInstance3D]s marked with [constant GeometryInstance3D.GI_MODE_STATIC] and [Light3D]s marked with either [constant Light3D.BAKE_STATIC] or [constant Light3D.BAKE_DYNAMIC]. If [param create_visual_debug] is `true`, after baking the light, this will generate a [MultiMesh] that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the [VoxelGI]'s data and debug any issues that may be occurring.  
         *      
         *  **Note:** [method bake] works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a [VoxelGI] node generally takes from 5 to 20 seconds in most scenes. Reducing [member subdiv] can speed up baking.  
         *      
         *  **Note:** [GeometryInstance3D]s and [Light3D]s must be fully ready before [method bake] is called. If you are procedurally creating those and some meshes or lights are missing from your baked [VoxelGI], use `call_deferred("bake")` instead of calling [method bake] directly.  
         */
        bake(from_node?: Node /* = undefined */, create_visual_debug?: boolean /* = false */): void
        
        /** Calls [method bake] with `create_visual_debug` enabled. */
        debug_bake(): void
        
        /** Number of times to subdivide the grid that the [VoxelGI] operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance. */
        get subdiv(): int64
        set subdiv(value: int64)
        
        /** The size of the area covered by the [VoxelGI]. If you make the size larger without increasing the subdivisions with [member subdiv], the size of each cell will increase and result in lower detailed lighting.  
         *      
         *  **Note:** Size is clamped to 1.0 unit or more on each axis.  
         */
        get size(): Vector3
        set size(value: Vector3)
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [VoxelGI] will have banding artifacts or may have over-exposure artifacts. */
        get camera_attributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        get data(): null | VoxelGIData
        set data(value: null | VoxelGIData)
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_voxelgidata.html  
     */
    class VoxelGIData extends Resource {
        constructor(identifier?: any)
        allocate(to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3, octree_cells: PackedByteArray | byte[] | ArrayBuffer, data_cells: PackedByteArray | byte[] | ArrayBuffer, distance_field: PackedByteArray | byte[] | ArrayBuffer, level_counts: PackedInt32Array | int32[]): void
        
        /** Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).  
         *      
         *  **Note:** If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.  
         */
        get_bounds(): AABB
        get_octree_size(): Vector3
        get_to_cell_xform(): Transform3D
        get_octree_cells(): PackedByteArray
        get_data_cells(): PackedByteArray
        get_level_counts(): PackedInt32Array
        get _data(): GDictionary
        set _data(value: GDictionary)
        
        /** The dynamic range to use (`1.0` represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
        get dynamic_range(): float64
        set dynamic_range(value: float64)
        
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get energy(): float64
        set energy(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get bias(): float64
        set bias(value: float64)
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        get normal_bias(): float64
        set normal_bias(value: float64)
        
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        get propagation(): float64
        set propagation(value: float64)
        
        /** If `true`, performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
        get use_two_bounces(): boolean
        set use_two_bounces(value: boolean)
        
        /** If `true`, [Environment] lighting is ignored by the [VoxelGI] node. If `false`, [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
        get interior(): boolean
        set interior(value: boolean)
    }
    /** Holds an [Object]. If the object is [RefCounted], it doesn't update the reference count.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_weakref.html  
     */
    class WeakRef extends RefCounted {
        constructor(identifier?: any)
        /** Returns the [Object] this weakref is referring to. Returns `null` if that object no longer exists. */
        get_ref(): any
    }
    namespace WebRTCDataChannel {
        enum WriteMode {
            /** Tells the channel to send data over this channel as text. An external peer (non-Godot) would receive this as a string. */
            WRITE_MODE_TEXT = 0,
            
            /** Tells the channel to send data over this channel as binary. An external peer (non-Godot) would receive this as array buffer or blob. */
            WRITE_MODE_BINARY = 1,
        }
        enum ChannelState {
            /** The channel was created, but it's still trying to connect. */
            STATE_CONNECTING = 0,
            
            /** The channel is currently open, and data can flow over it. */
            STATE_OPEN = 1,
            
            /** The channel is being closed, no new messages will be accepted, but those already in queue will be flushed. */
            STATE_CLOSING = 2,
            
            /** The channel was closed, or connection failed. */
            STATE_CLOSED = 3,
        }
    }
    /** @link https://docs.godotengine.org/en/4.4/classes/class_webrtcdatachannel.html */
    class WebRTCDataChannel extends PacketPeer {
        constructor(identifier?: any)
        /** Reserved, but not used for now. */
        poll(): Error
        
        /** Closes this data channel, notifying the other peer. */
        close(): void
        
        /** Returns `true` if the last received packet was transferred as text. See [member write_mode]. */
        was_string_packet(): boolean
        
        /** Returns the current state of this channel, see [enum ChannelState]. */
        get_ready_state(): WebRTCDataChannel.ChannelState
        
        /** Returns the label assigned to this channel during creation. */
        get_label(): string
        
        /** Returns `true` if this channel was created with ordering enabled (default). */
        is_ordered(): boolean
        
        /** Returns the ID assigned to this channel during creation (or auto-assigned during negotiation).  
         *  If the channel is not negotiated out-of-band the ID will only be available after the connection is established (will return `65535` until then).  
         */
        get_id(): int64
        
        /** Returns the `maxPacketLifeTime` value assigned to this channel during creation.  
         *  Will be `65535` if not specified.  
         */
        get_max_packet_life_time(): int64
        
        /** Returns the `maxRetransmits` value assigned to this channel during creation.  
         *  Will be `65535` if not specified.  
         */
        get_max_retransmits(): int64
        
        /** Returns the sub-protocol assigned to this channel during creation. An empty string if not specified. */
        get_protocol(): string
        
        /** Returns `true` if this channel was created with out-of-band configuration. */
        is_negotiated(): boolean
        
        /** Returns the number of bytes currently queued to be sent over this channel. */
        get_buffered_amount(): int64
        
        /** The transfer mode to use when sending outgoing packet. Either text or binary. */
        get write_mode(): int64
        set write_mode(value: int64)
    }
    /** @link https://docs.godotengine.org/en/4.4/classes/class_webrtcdatachannelextension.html */
    class WebRTCDataChannelExtension extends WebRTCDataChannel {
        constructor(identifier?: any)
        /* gdvirtual */ _get_packet(r_buffer: int64, r_buffer_size: int64): Error
        /* gdvirtual */ _put_packet(p_buffer: int64, p_buffer_size: int64): Error
        /* gdvirtual */ _get_available_packet_count(): int64
        /* gdvirtual */ _get_max_packet_size(): int64
        /* gdvirtual */ _poll(): Error
        /* gdvirtual */ _close(): void
        /* gdvirtual */ _set_write_mode(p_write_mode: WebRTCDataChannel.WriteMode): void
        /* gdvirtual */ _get_write_mode(): WebRTCDataChannel.WriteMode
        /* gdvirtual */ _was_string_packet(): boolean
        /* gdvirtual */ _get_ready_state(): WebRTCDataChannel.ChannelState
        /* gdvirtual */ _get_label(): string
        /* gdvirtual */ _is_ordered(): boolean
        /* gdvirtual */ _get_id(): int64
        /* gdvirtual */ _get_max_packet_life_time(): int64
        /* gdvirtual */ _get_max_retransmits(): int64
        /* gdvirtual */ _get_protocol(): string
        /* gdvirtual */ _is_negotiated(): boolean
        /* gdvirtual */ _get_buffered_amount(): int64
    }
    /** A simple interface to create a peer-to-peer mesh network composed of [WebRTCPeerConnection] that is compatible with the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_webrtcmultiplayerpeer.html  
     */
    class WebRTCMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Initialize the multiplayer peer as a server (with unique ID of `1`). This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.  
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).  
         */
        create_server(channels_config?: GArray /* = [] */): Error
        
        /** Initialize the multiplayer peer as a client with the given [param peer_id] (must be between 2 and 2147483647). In this mode, you should only call [method add_peer] once and with [param peer_id] of `1`. This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.  
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).  
         */
        create_client(peer_id: int64, channels_config?: GArray /* = [] */): Error
        
        /** Initialize the multiplayer peer as a mesh (i.e. all peers connect to each other) with the given [param peer_id] (must be between 1 and 2147483647). */
        create_mesh(peer_id: int64, channels_config?: GArray /* = [] */): Error
        
        /** Add a new peer to the mesh with the given [param peer_id]. The [WebRTCPeerConnection] must be in state [constant WebRTCPeerConnection.STATE_NEW].  
         *  Three channels will be created for reliable, unreliable, and ordered transport. The value of [param unreliable_lifetime] will be passed to the `"maxPacketLifetime"` option when creating unreliable and ordered channels (see [method WebRTCPeerConnection.create_data_channel]).  
         */
        add_peer(peer: WebRTCPeerConnection, peer_id: int64, unreliable_lifetime?: int64 /* = 1 */): Error
        
        /** Remove the peer with given [param peer_id] from the mesh. If the peer was connected, and [signal MultiplayerPeer.peer_connected] was emitted for it, then [signal MultiplayerPeer.peer_disconnected] will be emitted. */
        remove_peer(peer_id: int64): void
        
        /** Returns `true` if the given [param peer_id] is in the peers map (it might not be connected though). */
        has_peer(peer_id: int64): boolean
        
        /** Returns a dictionary representation of the peer with given [param peer_id] with three keys. `"connection"` containing the [WebRTCPeerConnection] to this peer, `"channels"` an array of three [WebRTCDataChannel], and `"connected"` a boolean representing if the peer connection is currently connected (all three channels are open). */
        get_peer(peer_id: int64): GDictionary
        
        /** Returns a dictionary which keys are the peer ids and values the peer representation as in [method get_peer]. */
        get_peers(): GDictionary
    }
    namespace WebRTCPeerConnection {
        enum ConnectionState {
            /** The connection is new, data channels and an offer can be created in this state. */
            STATE_NEW = 0,
            
            /** The peer is connecting, ICE is in progress, none of the transports has failed. */
            STATE_CONNECTING = 1,
            
            /** The peer is connected, all ICE transports are connected. */
            STATE_CONNECTED = 2,
            
            /** At least one ICE transport is disconnected. */
            STATE_DISCONNECTED = 3,
            
            /** One or more of the ICE transports failed. */
            STATE_FAILED = 4,
            
            /** The peer connection is closed (after calling [method close] for example). */
            STATE_CLOSED = 5,
        }
        enum GatheringState {
            /** The peer connection was just created and hasn't done any networking yet. */
            GATHERING_STATE_NEW = 0,
            
            /** The ICE agent is in the process of gathering candidates for the connection. */
            GATHERING_STATE_GATHERING = 1,
            
            /** The ICE agent has finished gathering candidates. If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to gathering to gather those candidates. */
            GATHERING_STATE_COMPLETE = 2,
        }
        enum SignalingState {
            /** There is no ongoing exchange of offer and answer underway. This may mean that the [WebRTCPeerConnection] is new ([constant STATE_NEW]) or that negotiation is complete and a connection has been established ([constant STATE_CONNECTED]). */
            SIGNALING_STATE_STABLE = 0,
            
            /** The local peer has called [method set_local_description], passing in SDP representing an offer (usually created by calling [method create_offer]), and the offer has been applied successfully. */
            SIGNALING_STATE_HAVE_LOCAL_OFFER = 1,
            
            /** The remote peer has created an offer and used the signaling server to deliver it to the local peer, which has set the offer as the remote description by calling [method set_remote_description]. */
            SIGNALING_STATE_HAVE_REMOTE_OFFER = 2,
            
            /** The offer sent by the remote peer has been applied and an answer has been created and applied by calling [method set_local_description]. This provisional answer describes the supported media formats and so forth, but may not have a complete set of ICE candidates included. Further candidates will be delivered separately later. */
            SIGNALING_STATE_HAVE_LOCAL_PRANSWER = 3,
            
            /** A provisional answer has been received and successfully applied in response to an offer previously sent and established by calling [method set_local_description]. */
            SIGNALING_STATE_HAVE_REMOTE_PRANSWER = 4,
            
            /** The [WebRTCPeerConnection] has been closed. */
            SIGNALING_STATE_CLOSED = 5,
        }
    }
    /** Interface to a WebRTC peer connection.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_webrtcpeerconnection.html  
     */
    class WebRTCPeerConnection extends RefCounted {
        constructor(identifier?: any)
        /** Sets the [param extension_class] as the default [WebRTCPeerConnectionExtension] returned when creating a new [WebRTCPeerConnection]. */
        static set_default_extension(extension_class: StringName): void
        
        /** Re-initialize this peer connection, closing any previously active connection, and going back to state [constant STATE_NEW]. A dictionary of [param configuration] options can be passed to configure the peer connection.  
         *  Valid [param configuration] options are:  
         *    
         */
        initialize(configuration?: GDictionary /* = new GDictionary() */): Error
        
        /** Returns a new [WebRTCDataChannel] (or `null` on failure) with given [param label] and optionally configured via the [param options] dictionary. This method can only be called when the connection is in state [constant STATE_NEW].  
         *  There are two ways to create a working data channel: either call [method create_data_channel] on only one of the peer and listen to [signal data_channel_received] on the other, or call [method create_data_channel] on both peers, with the same values, and the `"negotiated"` option set to `true`.  
         *  Valid [param options] are:  
         *    
         *      
         *  **Note:** You must keep a reference to channels created this way, or it will be closed.  
         */
        create_data_channel(label: string, options?: GDictionary /* = new GDictionary() */): WebRTCDataChannel
        
        /** Creates a new SDP offer to start a WebRTC connection with a remote peer. At least one [WebRTCDataChannel] must have been created before calling this method.  
         *  If this functions returns [constant OK], [signal session_description_created] will be called when the session is ready to be sent.  
         */
        create_offer(): Error
        
        /** Sets the SDP description of the local peer. This should be called in response to [signal session_description_created].  
         *  After calling this function the peer will start emitting [signal ice_candidate_created] (unless an [enum Error] different from [constant OK] is returned).  
         */
        set_local_description(type: string, sdp: string): Error
        
        /** Sets the SDP description of the remote peer. This should be called with the values generated by a remote peer and received over the signaling server.  
         *  If [param type] is `"offer"` the peer will emit [signal session_description_created] with the appropriate answer.  
         *  If [param type] is `"answer"` the peer will start emitting [signal ice_candidate_created].  
         */
        set_remote_description(type: string, sdp: string): Error
        
        /** Add an ice candidate generated by a remote peer (and received over the signaling server). See [signal ice_candidate_created]. */
        add_ice_candidate(media: string, index: int64, name: string): Error
        
        /** Call this method frequently (e.g. in [method Node._process] or [method Node._physics_process]) to properly receive signals. */
        poll(): Error
        
        /** Close the peer connection and all data channels associated with it.  
         *      
         *  **Note:** You cannot reuse this object for a new connection unless you call [method initialize].  
         */
        close(): void
        
        /** Returns the connection state. See [enum ConnectionState]. */
        get_connection_state(): WebRTCPeerConnection.ConnectionState
        
        /** Returns the ICE [enum GatheringState] of the connection. This lets you detect, for example, when collection of ICE candidates has finished. */
        get_gathering_state(): WebRTCPeerConnection.GatheringState
        
        /** Returns the signaling state on the local end of the connection while connecting or reconnecting to another peer. */
        get_signaling_state(): WebRTCPeerConnection.SignalingState
        
        /** Emitted after a successful call to [method create_offer] or [method set_remote_description] (when it generates an answer). The parameters are meant to be passed to [method set_local_description] on this object, and sent to the remote peer over the signaling server. */
        readonly session_description_created: Signal<(type: string, sdp: string) => void>
        
        /** Emitted when a new ICE candidate has been created. The three parameters are meant to be passed to the remote peer over the signaling server. */
        readonly ice_candidate_created: Signal<(media: string, index: int64, name: string) => void>
        
        /** Emitted when a new in-band channel is received, i.e. when the channel was created with `negotiated: false` (default).  
         *  The object will be an instance of [WebRTCDataChannel]. You must keep a reference of it or it will be closed automatically. See [method create_data_channel].  
         */
        readonly data_channel_received: Signal<(channel: WebRTCDataChannel) => void>
    }
    /** @link https://docs.godotengine.org/en/4.4/classes/class_webrtcpeerconnectionextension.html */
    class WebRTCPeerConnectionExtension extends WebRTCPeerConnection {
        constructor(identifier?: any)
        /* gdvirtual */ _get_connection_state(): WebRTCPeerConnection.ConnectionState
        /* gdvirtual */ _get_gathering_state(): WebRTCPeerConnection.GatheringState
        /* gdvirtual */ _get_signaling_state(): WebRTCPeerConnection.SignalingState
        /* gdvirtual */ _initialize(p_config: GDictionary): Error
        /* gdvirtual */ _create_data_channel(p_label: string, p_config: GDictionary): null | WebRTCDataChannel
        /* gdvirtual */ _create_offer(): Error
        /* gdvirtual */ _set_remote_description(p_type: string, p_sdp: string): Error
        /* gdvirtual */ _set_local_description(p_type: string, p_sdp: string): Error
        /* gdvirtual */ _add_ice_candidate(p_sdp_mid_name: string, p_sdp_mline_index: int64, p_sdp_name: string): Error
        /* gdvirtual */ _poll(): Error
        /* gdvirtual */ _close(): void
    }
    /** Base class for WebSocket server and client.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_websocketmultiplayerpeer.html  
     */
    class WebSocketMultiplayerPeer extends MultiplayerPeer {
        constructor(identifier?: any)
        /** Starts a new multiplayer client connecting to the given [param url]. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         *      
         *  **Note:** It is recommended to specify the scheme part of the URL, i.e. the [param url] should start with either `ws://` or `wss://`.  
         */
        create_client(url: string, tls_client_options?: TLSOptions /* = undefined */): Error
        
        /** Starts a new multiplayer server listening on the given [param port]. You can optionally specify a [param bind_address], and provide valid [param tls_server_options] to use TLS. See [method TLSOptions.server]. */
        create_server(port: int64, bind_address?: string /* = '*' */, tls_server_options?: TLSOptions /* = undefined */): Error
        
        /** Returns the [WebSocketPeer] associated to the given [param peer_id]. */
        get_peer(peer_id: int64): null | WebSocketPeer
        
        /** Returns the IP address of the given peer. */
        get_peer_address(id: int64): string
        
        /** Returns the remote port of the given peer. */
        get_peer_port(id: int64): int64
        
        /** The supported WebSocket sub-protocols. See [member WebSocketPeer.supported_protocols] for more details. */
        get supported_protocols(): PackedStringArray
        set supported_protocols(value: PackedStringArray | string[])
        
        /** The extra headers to use during handshake. See [member WebSocketPeer.handshake_headers] for more details. */
        get handshake_headers(): PackedStringArray
        set handshake_headers(value: PackedStringArray | string[])
        
        /** The inbound buffer size for connected peers. See [member WebSocketPeer.inbound_buffer_size] for more details. */
        get inbound_buffer_size(): int64
        set inbound_buffer_size(value: int64)
        
        /** The outbound buffer size for connected peers. See [member WebSocketPeer.outbound_buffer_size] for more details. */
        get outbound_buffer_size(): int64
        set outbound_buffer_size(value: int64)
        
        /** The maximum time each peer can stay in a connecting state before being dropped. */
        get handshake_timeout(): float64
        set handshake_timeout(value: float64)
        
        /** The maximum number of queued packets for connected peers. See [member WebSocketPeer.max_queued_packets] for more details. */
        get max_queued_packets(): int64
        set max_queued_packets(value: int64)
    }
    namespace WebSocketPeer {
        enum WriteMode {
            /** Specifies that WebSockets messages should be transferred as text payload (only valid UTF-8 is allowed). */
            WRITE_MODE_TEXT = 0,
            
            /** Specifies that WebSockets messages should be transferred as binary payload (any byte combination is allowed). */
            WRITE_MODE_BINARY = 1,
        }
        enum State {
            /** Socket has been created. The connection is not yet open. */
            STATE_CONNECTING = 0,
            
            /** The connection is open and ready to communicate. */
            STATE_OPEN = 1,
            
            /** The connection is in the process of closing. This means a close request has been sent to the remote peer but confirmation has not been received. */
            STATE_CLOSING = 2,
            
            /** The connection is closed or couldn't be opened. */
            STATE_CLOSED = 3,
        }
    }
    /** A WebSocket connection.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_websocketpeer.html  
     */
    class WebSocketPeer extends PacketPeer {
        constructor(identifier?: any)
        /** Connects to the given URL. TLS certificates will be verified against the hostname when connecting using the `wss://` protocol. You can pass the optional [param tls_client_options] parameter to customize the trusted certification authorities, or disable the common name verification. See [method TLSOptions.client] and [method TLSOptions.client_unsafe].  
         *      
         *  **Note:** This method is non-blocking, and will return [constant OK] before the connection is established as long as the provided parameters are valid and the peer is not in an invalid state (e.g. already connected). Regularly call [method poll] (e.g. during [Node] process) and check the result of [method get_ready_state] to know whether the connection succeeds or fails.  
         *      
         *  **Note:** To avoid mixed content warnings or errors in Web, you may have to use a [param url] that starts with `wss://` (secure) instead of `ws://`. When doing so, make sure to use the fully qualified domain name that matches the one defined in the server's TLS certificate. Do not connect directly via the IP address for `wss://` connections, as it won't match with the TLS certificate.  
         */
        connect_to_url(url: string, tls_client_options?: TLSOptions /* = undefined */): Error
        
        /** Accepts a peer connection performing the HTTP handshake as a WebSocket server. The [param stream] must be a valid TCP stream retrieved via [method TCPServer.take_connection], or a TLS stream accepted via [method StreamPeerTLS.accept_stream].  
         *      
         *  **Note:** Not supported in Web exports due to browsers' restrictions.  
         */
        accept_stream(stream: StreamPeer): Error
        
        /** Sends the given [param message] using the desired [param write_mode]. When sending a [String], prefer using [method send_text]. */
        send(message: PackedByteArray | byte[] | ArrayBuffer, write_mode?: WebSocketPeer.WriteMode /* = 1 */): Error
        
        /** Sends the given [param message] using WebSocket text mode. Prefer this method over [method PacketPeer.put_packet] when interacting with third-party text-based API (e.g. when using [JSON] formatted messages). */
        send_text(message: string): Error
        
        /** Returns `true` if the last received packet was sent as a text payload. See [enum WriteMode]. */
        was_string_packet(): boolean
        
        /** Updates the connection state and receive incoming packets. Call this function regularly to keep it in a clean state. */
        poll(): void
        
        /** Closes this WebSocket connection. [param code] is the status code for the closure (see RFC 6455 section 7.4 for a list of valid status codes). [param reason] is the human readable reason for closing the connection (can be any UTF-8 string that's smaller than 123 bytes). If [param code] is negative, the connection will be closed immediately without notifying the remote peer.  
         *      
         *  **Note:** To achieve a clean close, you will need to keep polling until [constant STATE_CLOSED] is reached.  
         *      
         *  **Note:** The Web export might not support all status codes. Please refer to browser-specific documentation for more details.  
         */
        close(code?: int64 /* = 1000 */, reason?: string /* = '' */): void
        
        /** Returns the IP address of the connected peer.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        get_connected_host(): string
        
        /** Returns the remote port of the connected peer.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        get_connected_port(): int64
        
        /** Returns the selected WebSocket sub-protocol for this connection or an empty string if the sub-protocol has not been selected yet. */
        get_selected_protocol(): string
        
        /** Returns the URL requested by this peer. The URL is derived from the `url` passed to [method connect_to_url] or from the HTTP headers when acting as server (i.e. when using [method accept_stream]). */
        get_requested_url(): string
        
        /** Disable Nagle's algorithm on the underlying TCP socket (default). See [method StreamPeerTCP.set_no_delay] for more information.  
         *      
         *  **Note:** Not available in the Web export.  
         */
        set_no_delay(enabled: boolean): void
        
        /** Returns the current amount of data in the outbound websocket buffer.     
         *  **Note:** Web exports use WebSocket.bufferedAmount, while other platforms use an internal buffer.  
         */
        get_current_outbound_buffered_amount(): int64
        
        /** Returns the ready state of the connection. See [enum State]. */
        get_ready_state(): WebSocketPeer.State
        
        /** Returns the received WebSocket close frame status code, or `-1` when the connection was not cleanly closed. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
        get_close_code(): int64
        
        /** Returns the received WebSocket close frame status reason string. Only call this method when [method get_ready_state] returns [constant STATE_CLOSED]. */
        get_close_reason(): string
        
        /** The WebSocket sub-protocols allowed during the WebSocket handshake. */
        get supported_protocols(): PackedStringArray
        set supported_protocols(value: PackedStringArray | string[])
        
        /** The extra HTTP headers to be sent during the WebSocket handshake.  
         *      
         *  **Note:** Not supported in Web exports due to browsers' restrictions.  
         */
        get handshake_headers(): PackedStringArray
        set handshake_headers(value: PackedStringArray | string[])
        
        /** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the inbound packets). */
        get inbound_buffer_size(): int64
        set inbound_buffer_size(value: int64)
        
        /** The size of the input buffer in bytes (roughly the maximum amount of memory that will be allocated for the outbound packets). */
        get outbound_buffer_size(): int64
        set outbound_buffer_size(value: int64)
        
        /** The maximum amount of packets that will be allowed in the queues (both inbound and outbound). */
        get max_queued_packets(): int64
        set max_queued_packets(value: int64)
        
        /** The interval (in seconds) at which the peer will automatically send WebSocket "ping" control frames. When set to `0`, no "ping" control frames will be sent.  
         *      
         *  **Note:** Has no effect in Web exports due to browser restrictions.  
         */
        get heartbeat_interval(): int64
        set heartbeat_interval(value: int64)
    }
    namespace WebXRInterface {
        enum TargetRayMode {
            /** We don't know the target ray mode. */
            TARGET_RAY_MODE_UNKNOWN = 0,
            
            /** Target ray originates at the viewer's eyes and points in the direction they are looking. */
            TARGET_RAY_MODE_GAZE = 1,
            
            /** Target ray from a handheld pointer, most likely a VR touch controller. */
            TARGET_RAY_MODE_TRACKED_POINTER = 2,
            
            /** Target ray from touch screen, mouse or other tactile input device. */
            TARGET_RAY_MODE_SCREEN = 3,
        }
    }
    /** XR interface using WebXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_webxrinterface.html  
     */
    class WebXRInterface extends XRInterface {
        constructor(identifier?: any)
        /** Checks if the given [param session_mode] is supported by the user's browser.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         *  This method returns nothing, instead it emits the [signal session_supported] signal with the result.  
         */
        is_session_supported(session_mode: string): void
        
        /** Returns `true` if there is an active input source with the given [param input_source_id]. */
        is_input_source_active(input_source_id: int64): boolean
        
        /** Gets an [XRControllerTracker] for the given [param input_source_id].  
         *  In the context of WebXR, an input source can be an advanced VR controller like the Oculus Touch or Index controllers, or even a tap on the screen, a spoken voice command or a button press on the device itself. When a non-traditional input source is used, interpret the position and orientation of the [XRPositionalTracker] as a ray pointing at the object the user wishes to interact with.  
         *  Use this method to get information about the input source that triggered one of these signals:  
         *  - [signal selectstart]  
         *  - [signal select]  
         *  - [signal selectend]  
         *  - [signal squeezestart]  
         *  - [signal squeeze]  
         *  - [signal squeezestart]  
         */
        get_input_source_tracker(input_source_id: int64): null | XRControllerTracker
        
        /** Returns the target ray mode for the given [param input_source_id].  
         *  This can help interpret the input coming from that input source. See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRInputSource/targetRayMode]XRInputSource.targetRayMode[/url] for more information.  
         */
        get_input_source_target_ray_mode(input_source_id: int64): WebXRInterface.TargetRayMode
        
        /** Returns the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It may not report an accurate value until after using [method set_display_refresh_rate]. */
        get_display_refresh_rate(): float64
        
        /** Sets the display refresh rate for the current HMD. Not supported on all HMDs and browsers. It won't take effect right away until after [signal display_refresh_rate_changed] is emitted. */
        set_display_refresh_rate(refresh_rate: float64): void
        
        /** Returns display refresh rates supported by the current HMD. Only returned if this feature is supported by the web browser and after the interface has been initialized. */
        get_available_display_refresh_rates(): GArray
        
        /** The session mode used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
         */
        get session_mode(): string
        set session_mode(value: string)
        
        /** A comma-seperated list of required features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will fail and [signal session_failed] will be emitted.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url], or include other features like `"hand-tracking"` to enable hand tracking.  
         */
        get required_features(): string
        set required_features(value: string)
        
        /** A comma-seperated list of optional features used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  If a user's browser or device doesn't support one of the given features, initialization will continue, but you won't be able to use the requested feature.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url], or include other features like `"hand-tracking"` to enable hand tracking.  
         */
        get optional_features(): string
        set optional_features(value: string)
        
        /** A comma-seperated list of reference space types used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  The reference space types are requested in order, and the first one supported by the users device or browser will be used. The [member reference_space_type] property contains the reference space type that was ultimately selected.  
         *  This doesn't have any effect on the interface when already initialized.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get requested_reference_space_types(): string
        set requested_reference_space_types(value: string)
        
        /** The reference space type (from the list of requested types set in the [member requested_reference_space_types] property), that was ultimately used by [method XRInterface.initialize] when setting up the WebXR session.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpaceType]WebXR's XRReferenceSpaceType[/url]. If you want to use a particular reference space type, it must be listed in either [member required_features] or [member optional_features].  
         */
        get reference_space_type(): string
        
        /** A comma-separated list of features that were successfully enabled by [method XRInterface.initialize] when setting up the WebXR session.  
         *  This may include features requested by setting [member required_features] and [member optional_features], and will only be available after [signal session_started] has been emitted.  
         *      
         *  **Note:** This may not be support by all web browsers, in which case it will be an empty string.  
         */
        get enabled_features(): string
        
        /** Indicates if the WebXR session's imagery is visible to the user.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRVisibilityState]WebXR's XRVisibilityState[/url], including `"hidden"`, `"visible"`, and `"visible-blurred"`.  
         */
        get visibility_state(): string
        
        /** Emitted by [method is_session_supported] to indicate if the given [param session_mode] is supported or not. */
        readonly session_supported: Signal<(session_mode: string, supported: boolean) => void>
        
        /** Emitted by [method XRInterface.initialize] if the session is successfully started.  
         *  At this point, it's safe to do `get_viewport().use_xr = true` to instruct Godot to start rendering to the XR device.  
         */
        readonly session_started: Signal<() => void>
        
        /** Emitted when the user ends the WebXR session (which can be done using UI from the browser or device).  
         *  At this point, you should do `get_viewport().use_xr = false` to instruct Godot to resume rendering to the screen.  
         */
        readonly session_ended: Signal<() => void>
        
        /** Emitted by [method XRInterface.initialize] if the session fails to start.  
         *  [param message] may optionally contain an error message from WebXR, or an empty string if no message is available.  
         */
        readonly session_failed: Signal<(message: string) => void>
        
        /** Emitted when one of the input source has started its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectstart: Signal<(input_source_id: int64) => void>
        
        /** Emitted after one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly select: Signal<(input_source_id: int64) => void>
        
        /** Emitted when one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectend: Signal<(input_source_id: int64) => void>
        
        /** Emitted when one of the input sources has started its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezestart: Signal<(input_source_id: int64) => void>
        
        /** Emitted after one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeeze: Signal<(input_source_id: int64) => void>
        
        /** Emitted when one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezeend: Signal<(input_source_id: int64) => void>
        
        /** Emitted when [member visibility_state] has changed. */
        readonly visibility_state_changed: Signal<() => void>
        
        /** Emitted to indicate that the reference space has been reset or reconfigured.  
         *  When (or whether) this is emitted depends on the user's browser or device, but may include when the user has changed the dimensions of their play space (which you may be able to access via [method XRInterface.get_play_area]) or pressed/held a button to recenter their position.  
         *  See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace/reset_event]WebXR's XRReferenceSpace reset event[/url] for more information.  
         */
        readonly reference_space_reset: Signal<() => void>
        
        /** Emitted after the display's refresh rate has changed. */
        readonly display_refresh_rate_changed: Signal<() => void>
    }
    namespace Window {
        enum Mode {
            /** Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen). */
            MODE_WINDOWED = 0,
            
            /** Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed. */
            MODE_MINIMIZED = 1,
            
            /** Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed. */
            MODE_MAXIMIZED = 2,
            
            /** Full screen mode with full multi-window support.  
             *  Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.  
             *  **On Android:** This enables immersive mode.  
             *  **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.  
             *  **On macOS:** A new desktop is used to display the running project.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/4.4/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            MODE_FULLSCREEN = 3,
            
            /** A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).  
             *  Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.  
             *  **On Android:** This enables immersive mode.  
             *  **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.  
             *  **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.  
             *  **On Linux (X11):** Exclusive full screen mode bypasses compositor.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=https://docs.godotengine.org/en/4.4/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum Flags {
            /** The window can't be resized by dragging its resize grip. It's still possible to resize the window using [member size]. This flag is ignored for full screen windows. Set with [member unresizable]. */
            FLAG_RESIZE_DISABLED = 0,
            
            /** The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with [member borderless]. */
            FLAG_BORDERLESS = 1,
            
            /** The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with [member always_on_top]. */
            FLAG_ALWAYS_ON_TOP = 2,
            
            /** The window background can be transparent. Set with [member transparent].  
             *      
             *  **Note:** This flag has no effect if either [member ProjectSettings.display/window/per_pixel_transparency/allowed], or the window's [member Viewport.transparent_bg] is set to `false`.  
             */
            FLAG_TRANSPARENT = 3,
            
            /** The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with [member unfocusable]. */
            FLAG_NO_FOCUS = 4,
            
            /** Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [member transient]).  
             *      
             *  **Note:** This flag has no effect in embedded windows (unless said window is a [Popup]).  
             */
            FLAG_POPUP = 5,
            
            /** Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with [member extend_to_title].  
             *      
             *  **Note:** This flag is implemented only on macOS.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             */
            FLAG_EXTEND_TO_TITLE = 6,
            
            /** All mouse events are passed to the underlying window of the same application.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             */
            FLAG_MOUSE_PASSTHROUGH = 7,
            
            /** Window style is overridden, forcing sharp corners.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             *      
             *  **Note:** This flag is implemented only on Windows (11).  
             */
            FLAG_SHARP_CORNERS = 8,
            
            /** Windows is excluded from screenshots taken by [method DisplayServer.screen_get_image], [method DisplayServer.screen_get_image_rect], and [method DisplayServer.screen_get_pixel].  
             *      
             *  **Note:** This flag is implemented on macOS and Windows.  
             *      
             *  **Note:** Setting this flag will **NOT** prevent other apps from capturing an image, it should not be used as a security measure.  
             */
            FLAG_EXCLUDE_FROM_CAPTURE = 9,
            
            /** Max value of the [enum Flags]. */
            FLAG_MAX = 10,
        }
        enum ContentScaleMode {
            /** The content will not be scaled to match the [Window]'s size. */
            CONTENT_SCALE_MODE_DISABLED = 0,
            
            /** The content will be rendered at the target size. This is more performance-expensive than [constant CONTENT_SCALE_MODE_VIEWPORT], but provides better results. */
            CONTENT_SCALE_MODE_CANVAS_ITEMS = 1,
            
            /** The content will be rendered at the base size and then scaled to the target size. More performant than [constant CONTENT_SCALE_MODE_CANVAS_ITEMS], but results in pixelated image. */
            CONTENT_SCALE_MODE_VIEWPORT = 2,
        }
        enum ContentScaleAspect {
            /** The aspect will be ignored. Scaling will simply stretch the content to fit the target size. */
            CONTENT_SCALE_ASPECT_IGNORE = 0,
            
            /** The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides. */
            CONTENT_SCALE_ASPECT_KEEP = 1,
            
            /** The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides. */
            CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2,
            
            /** The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides. */
            CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3,
            
            /** The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space. */
            CONTENT_SCALE_ASPECT_EXPAND = 4,
        }
        enum ContentScaleStretch {
            /** The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling. */
            CONTENT_SCALE_STRETCH_FRACTIONAL = 0,
            
            /** The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size. */
            CONTENT_SCALE_STRETCH_INTEGER = 1,
        }
        enum LayoutDirection {
            /** Automatic layout direction, determined from the parent window layout direction. */
            LAYOUT_DIRECTION_INHERITED = 0,
            
            /** Automatic layout direction, determined from the current locale. */
            LAYOUT_DIRECTION_APPLICATION_LOCALE = 1,
            
            /** Left-to-right layout direction. */
            LAYOUT_DIRECTION_LTR = 2,
            
            /** Right-to-left layout direction. */
            LAYOUT_DIRECTION_RTL = 3,
            
            /** Automatic layout direction, determined from the system locale. */
            LAYOUT_DIRECTION_SYSTEM_LOCALE = 4,
            
            /** Represents the size of the [enum LayoutDirection] enum. */
            LAYOUT_DIRECTION_MAX = 5,
            LAYOUT_DIRECTION_LOCALE = 1,
        }
        enum WindowInitialPosition {
            /** Initial window position is determined by [member position]. */
            WINDOW_INITIAL_POSITION_ABSOLUTE = 0,
            
            /** Initial window position is the center of the primary screen. */
            WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1,
            
            /** Initial window position is the center of the main window screen. */
            WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2,
            
            /** Initial window position is the center of [member current_screen] screen. */
            WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3,
            
            /** Initial window position is the center of the screen containing the mouse pointer. */
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4,
            
            /** Initial window position is the center of the screen containing the window with the keyboard focus. */
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5,
        }
    }
    /** Base class for all windows, dialogs, and popups.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_window.html  
     */
    class Window<Map extends NodePathMap = any> extends Viewport<Map> {
        /** Emitted when [Window]'s visibility changes, right before [signal visibility_changed]. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         */
        static readonly NOTIFICATION_THEME_CHANGED = 32
        constructor(identifier?: any)
        
        /** Virtual method to be implemented by the user. Overrides the value returned by [method get_contents_minimum_size]. */
        /* gdvirtual */ _get_contents_minimum_size(): Vector2
        
        /** Returns the ID of the window. */
        get_window_id(): int64
        
        /** Centers a native window on the current screen and an embedded window on its embedder [Viewport]. */
        move_to_center(): void
        
        /** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum). */
        reset_size(): void
        
        /** Returns the window's position including its border.  
         *      
         *  **Note:** If [member visible] is `false`, this method returns the same value as [member position].  
         */
        get_position_with_decorations(): Vector2i
        
        /** Returns the window's size including its border.  
         *      
         *  **Note:** If [member visible] is `false`, this method returns the same value as [member size].  
         */
        get_size_with_decorations(): Vector2i
        
        /** Sets a specified window flag. */
        set_flag(flag: Window.Flags, enabled: boolean): void
        
        /** Returns `true` if the [param flag] is set. */
        get_flag(flag: Window.Flags): boolean
        
        /** Returns `true` if the window can be maximized (the maximize button is enabled). */
        is_maximize_allowed(): boolean
        
        /** Tells the OS that the [Window] needs an attention. This makes the window stand out in some way depending on the system, e.g. it might blink on the task bar. */
        request_attention(): void
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        move_to_foreground(): void
        
        /** Hides the window. This is not the same as minimized state. Hidden window can't be interacted with and needs to be made visible with [method show]. */
        hide(): void
        
        /** Makes the [Window] appear. This enables interactions with the [Window] and doesn't change any of its property other than visibility (unlike e.g. [method popup]). */
        show(): void
        
        /** If [param unparent] is `true`, the window is automatically unparented when going invisible.  
         *      
         *  **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.  
         */
        set_unparent_when_invisible(unparent: boolean): void
        
        /** Returns whether the window is being drawn to the screen. */
        can_draw(): boolean
        
        /** Returns `true` if the window is focused. */
        has_focus(): boolean
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        grab_focus(): void
        
        /** Starts an interactive drag operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's title bar. Using this method allows the window to participate in space switching, tiling, and other system features. */
        start_drag(): void
        
        /** Starts an interactive resize operation on the window, using the current mouse position. Call this method when handling a mouse button being pressed to simulate a pressed event on the window's edge. */
        start_resize(edge: DisplayServer.WindowResizeEdge): void
        
        /** If [param active] is `true`, enables system's native IME (Input Method Editor). */
        set_ime_active(active: boolean): void
        
        /** Moves IME to the given position. */
        set_ime_position(position: Vector2i): void
        
        /** Returns `true` if the window is currently embedded in another window. */
        is_embedded(): boolean
        
        /** Returns the combined minimum size from the child [Control] nodes of the window. Use [method child_controls_changed] to update it when child nodes have changed.  
         *  The value returned by this method can be overridden with [method _get_contents_minimum_size].  
         */
        get_contents_minimum_size(): Vector2
        
        /** Enables font oversampling. This makes fonts look better when they are scaled up. */
        set_use_font_oversampling(enable: boolean): void
        
        /** Returns `true` if font oversampling is enabled. See [method set_use_font_oversampling]. */
        is_using_font_oversampling(): boolean
        
        /** Requests an update of the [Window] size to fit underlying [Control] nodes. */
        child_controls_changed(): void
        
        /** Prevents `*_theme_*_override` methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
        begin_bulk_theme_override(): void
        
        /** Ends a bulk theme override update. See [method begin_bulk_theme_override]. */
        end_bulk_theme_override(): void
        
        /** Creates a local override for a theme icon with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_icon_override].  
         *  See also [method get_theme_icon].  
         */
        add_theme_icon_override(name: StringName, texture: Texture2D): void
        
        /** Creates a local override for a theme [StyleBox] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_stylebox_override].  
         *  See also [method get_theme_stylebox] and [method Control.add_theme_stylebox_override] for more details.  
         */
        add_theme_stylebox_override(name: StringName, stylebox: StyleBox): void
        
        /** Creates a local override for a theme [Font] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_override].  
         *  See also [method get_theme_font].  
         */
        add_theme_font_override(name: StringName, font: Font): void
        
        /** Creates a local override for a theme font size with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_font_size_override].  
         *  See also [method get_theme_font_size].  
         */
        add_theme_font_size_override(name: StringName, font_size: int64): void
        
        /** Creates a local override for a theme [Color] with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_color_override].  
         *  See also [method get_theme_color] and [method Control.add_theme_color_override] for more details.  
         */
        add_theme_color_override(name: StringName, color: Color): void
        
        /** Creates a local override for a theme constant with the specified [param name]. Local overrides always take precedence when fetching theme items for the control. An override can be removed with [method remove_theme_constant_override].  
         *  See also [method get_theme_constant].  
         */
        add_theme_constant_override(name: StringName, constant: int64): void
        
        /** Removes a local override for a theme icon with the specified [param name] previously added by [method add_theme_icon_override] or via the Inspector dock. */
        remove_theme_icon_override(name: StringName): void
        
        /** Removes a local override for a theme [StyleBox] with the specified [param name] previously added by [method add_theme_stylebox_override] or via the Inspector dock. */
        remove_theme_stylebox_override(name: StringName): void
        
        /** Removes a local override for a theme [Font] with the specified [param name] previously added by [method add_theme_font_override] or via the Inspector dock. */
        remove_theme_font_override(name: StringName): void
        
        /** Removes a local override for a theme font size with the specified [param name] previously added by [method add_theme_font_size_override] or via the Inspector dock. */
        remove_theme_font_size_override(name: StringName): void
        
        /** Removes a local override for a theme [Color] with the specified [param name] previously added by [method add_theme_color_override] or via the Inspector dock. */
        remove_theme_color_override(name: StringName): void
        
        /** Removes a local override for a theme constant with the specified [param name] previously added by [method add_theme_constant_override] or via the Inspector dock. */
        remove_theme_constant_override(name: StringName): void
        
        /** Returns an icon from the first matching [Theme] in the tree if that [Theme] has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_icon(name: StringName, theme_type?: StringName /* = '' */): null | Texture2D
        
        /** Returns a [StyleBox] from the first matching [Theme] in the tree if that [Theme] has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_stylebox(name: StringName, theme_type?: StringName /* = '' */): null | StyleBox
        
        /** Returns a [Font] from the first matching [Theme] in the tree if that [Theme] has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_font(name: StringName, theme_type?: StringName /* = '' */): null | Font
        
        /** Returns a font size from the first matching [Theme] in the tree if that [Theme] has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_font_size(name: StringName, theme_type?: StringName /* = '' */): int64
        
        /** Returns a [Color] from the first matching [Theme] in the tree if that [Theme] has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        get_theme_color(name: StringName, theme_type?: StringName /* = '' */): Color
        
        /** Returns a constant from the first matching [Theme] in the tree if that [Theme] has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for more details.  
         */
        get_theme_constant(name: StringName, theme_type?: StringName /* = '' */): int64
        
        /** Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.  
         *  See [method add_theme_icon_override].  
         */
        has_theme_icon_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_stylebox_override].  
         */
        has_theme_stylebox_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_override].  
         */
        has_theme_font_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_size_override].  
         */
        has_theme_font_size_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_color_override].  
         */
        has_theme_color_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.  
         *  See [method add_theme_constant_override].  
         */
        has_theme_constant_override(name: StringName): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_icon(name: StringName, theme_type?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_stylebox(name: StringName, theme_type?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_font(name: StringName, theme_type?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_font_size(name: StringName, theme_type?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_color(name: StringName, theme_type?: StringName /* = '' */): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_constant(name: StringName, theme_type?: StringName /* = '' */): boolean
        
        /** Returns the default base scale value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_base_scale] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_default_base_scale(): float64
        
        /** Returns the default font from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_default_font(): null | Font
        
        /** Returns the default font size value from the first matching [Theme] in the tree if that [Theme] has a valid [member Theme.default_font_size] value.  
         *  See [method Control.get_theme_color] for details.  
         */
        get_theme_default_font_size(): int64
        
        /** Sets layout direction and text writing direction. Right-to-left layouts are necessary for certain languages (e.g. Arabic and Hebrew). */
        set_layout_direction(direction: Window.LayoutDirection): void
        
        /** Returns layout direction and text writing direction. */
        get_layout_direction(): Window.LayoutDirection
        
        /** Returns `true` if layout is right-to-left. */
        is_layout_rtl(): boolean
        
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `true` (single-window mode), [param rect]'s coordinates are global and relative to the main window's top-left corner (excluding window decorations). If [param rect]'s position coordinates are negative, the window will be located outside the main window and may not be visible as a result.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false` (multi-window mode), [param rect]'s coordinates are global and relative to the top-left corner of the leftmost screen. If [param rect]'s position coordinates are negative, the window will be placed at the top-left corner of the screen.  
         *      
         *  **Note:** [param rect] must be in global coordinates if specified.  
         */
        popup(rect?: Rect2i /* = new Rect2i(0, 0, 0, 0) */): void
        
        /** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
        popup_on_parent(parent_rect: Rect2i): void
        
        /** Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popup_centered(minsize?: Vector2i /* = Vector2i.ZERO */): void
        
        /** If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.  
         *  If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.  
         */
        popup_centered_ratio(ratio?: float64 /* = 0.8 */): void
        
        /** Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popup_centered_clamped(minsize?: Vector2i /* = Vector2i.ZERO */, fallback_ratio?: float64 /* = 0.75 */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive(from_node: Node, rect?: Rect2i /* = new Rect2i(0, 0, 0, 0) */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_on_parent] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_on_parent(from_node: Node, parent_rect: Rect2i): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_centered(from_node: Node, minsize?: Vector2i /* = Vector2i.ZERO */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_ratio] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_centered_ratio(from_node: Node, ratio?: float64 /* = 0.8 */): void
        
        /** Attempts to parent this dialog to the last exclusive window relative to [param from_node], and then calls [method Window.popup_centered_clamped] on it. The dialog must have no current parent, otherwise the method fails.  
         *  See also [method set_unparent_when_invisible] and [method Node.get_last_exclusive_window].  
         */
        popup_exclusive_centered_clamped(from_node: Node, minsize?: Vector2i /* = Vector2i.ZERO */, fallback_ratio?: float64 /* = 0.75 */): void
        
        /** Set's the window's current mode.  
         *      
         *  **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.  
         *      
         *  **Note:** This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        get mode(): int64
        set mode(value: int64)
        
        /** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
        get title(): string
        set title(value: string)
        
        /** Specifies the initial type of position for the [Window]. See [enum WindowInitialPosition] constants. */
        get initial_position(): int64
        set initial_position(value: int64)
        
        /** The window's position in pixels.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [Viewport].  
         *      
         *  **Note:** This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].  
         */
        get position(): Vector2i
        set position(value: Vector2i)
        
        /** The window's size in pixels. */
        get size(): Vector2i
        set size(value: Vector2i)
        
        /** The screen the window is currently on. */
        get current_screen(): int64
        set current_screen(value: int64)
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** This property is ignored if [member mouse_passthrough] is set to `true`.  
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         */
        get mouse_passthrough_polygon(): PackedVector2Array
        set mouse_passthrough_polygon(value: PackedVector2Array | Vector2[])
        
        /** If `true`, the window is visible. */
        get visible(): boolean
        set visible(value: boolean)
        
        /** If `true`, the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.  
         *  If `false`, you need to call [method child_controls_changed] manually.  
         */
        get wrap_controls(): boolean
        set wrap_controls(value: boolean)
        
        /** If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *  Note that behavior might be different depending on the platform.  
         */
        get transient(): boolean
        set transient(value: boolean)
        
        /** If `true`, and the [Window] is [member transient], this window will (at the time of becoming visible) become transient to the currently focused window instead of the immediate parent window in the hierarchy. Note that the transient parent is assigned at the time this window becomes visible, so changing it afterwards has no effect until re-shown. */
        get transient_to_focused(): boolean
        set transient_to_focused(value: boolean)
        
        /** If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].  
         *  Needs [member transient] enabled to work.  
         */
        get exclusive(): boolean
        set exclusive(value: boolean)
        
        /** If `true`, the window can't be resized. Minimize and maximize buttons are disabled. */
        get unresizable(): boolean
        set unresizable(value: boolean)
        
        /** If `true`, the window will have no borders. */
        get borderless(): boolean
        set borderless(value: boolean)
        
        /** If `true`, the window will be on top of all other windows. Does not work if [member transient] is enabled. */
        get always_on_top(): boolean
        set always_on_top(value: boolean)
        
        /** If `true`, the [Window]'s background can be transparent. This is best used with embedded windows.  
         *      
         *  **Note:** Transparency support is implemented on Linux, macOS and Windows, but availability might vary depending on GPU driver, display manager, and compositor capabilities.  
         *      
         *  **Note:** This property has no effect if [member ProjectSettings.display/window/per_pixel_transparency/allowed] is set to `false`.  
         */
        get transparent(): boolean
        set transparent(value: boolean)
        
        /** If `true`, the [Window] can't be focused nor interacted with. It can still be visible. */
        get unfocusable(): boolean
        set unfocusable(value: boolean)
        
        /** If `true`, the [Window] will be considered a popup. Popups are sub-windows that don't show as separate windows in system's window manager's window list and will send close request when anything is clicked outside of them (unless [member exclusive] is enabled). */
        get popup_window(): boolean
        set popup_window(value: boolean)
        
        /** If `true`, the [Window] contents is expanded to the full size of the window, window title bar is transparent.  
         *      
         *  **Note:** This property is implemented only on macOS.  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get extend_to_title(): boolean
        set extend_to_title(value: boolean)
        
        /** If `true`, all mouse events will be passed to the underlying window of the same application. See also [member mouse_passthrough_polygon].  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get mouse_passthrough(): boolean
        set mouse_passthrough(value: boolean)
        
        /** If `true`, the [Window] will override the OS window style to display sharp corners.  
         *      
         *  **Note:** This property is implemented only on Windows (11).  
         *      
         *  **Note:** This property only works with native windows.  
         */
        get sharp_corners(): boolean
        set sharp_corners(value: boolean)
        
        /** Windows is excluded from screenshots taken by [method DisplayServer.screen_get_image], [method DisplayServer.screen_get_image_rect], and [method DisplayServer.screen_get_pixel]. */
        get exclude_from_capture(): boolean
        set exclude_from_capture(value: boolean)
        
        /** If `true`, native window will be used regardless of parent viewport and project settings. */
        get force_native(): boolean
        set force_native(value: boolean)
        
        /** If non-zero, the [Window] can't be resized to be smaller than this size.  
         *      
         *  **Note:** This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.  
         */
        get min_size(): Vector2i
        set min_size(value: Vector2i)
        
        /** If non-zero, the [Window] can't be resized to be bigger than this size.  
         *      
         *  **Note:** This property will be ignored if the value is lower than [member min_size].  
         */
        get max_size(): Vector2i
        set max_size(value: Vector2i)
        
        /** If `true`, the [Window] width is expanded to keep the title bar text fully visible. */
        get keep_title_visible(): boolean
        set keep_title_visible(value: boolean)
        
        /** Base size of the content (i.e. nodes that are drawn inside the window). If non-zero, [Window]'s content will be scaled when the window is resized to a different size. */
        get content_scale_size(): Vector2i
        set content_scale_size(value: Vector2i)
        
        /** Specifies how the content is scaled when the [Window] is resized. */
        get content_scale_mode(): int64
        set content_scale_mode(value: int64)
        
        /** Specifies how the content's aspect behaves when the [Window] is resized. The base aspect is determined by [member content_scale_size]. */
        get content_scale_aspect(): int64
        set content_scale_aspect(value: int64)
        
        /** The policy to use to determine the final scale factor for 2D elements. This affects how [member content_scale_factor] is applied, in addition to the automatic scale factor determined by [member content_scale_size]. */
        get content_scale_stretch(): int64
        set content_scale_stretch(value: int64)
        
        /** Specifies the base scale of [Window]'s content when its [member size] is equal to [member content_scale_size]. See also [method Viewport.get_stretch_transform]. */
        get content_scale_factor(): float64
        set content_scale_factor(value: float64)
        
        /** Toggles if any text should automatically change to its translated version depending on the current locale. */
        get auto_translate(): boolean
        set auto_translate(value: boolean)
        
        /** The [Theme] resource this node and all its [Control] and [Window] children use. If a child node has its own [Theme] resource set, theme items are merged with child's definitions having higher priority.  
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        get theme(): null | Theme
        set theme(value: null | Theme)
        
        /** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
        get theme_type_variation(): string
        set theme_type_variation(value: string)
        
        /** Emitted when the [Window] is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system. */
        readonly window_input: Signal<(event: InputEvent) => void>
        
        /** Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.  
         *    
         *      
         *  **Note:** This signal only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        readonly files_dropped: Signal<(files: PackedStringArray) => void>
        
        /** Emitted when the mouse cursor enters the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouse_entered: Signal<() => void>
        
        /** Emitted when the mouse cursor leaves the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouse_exited: Signal<() => void>
        
        /** Emitted when the [Window] gains focus. */
        readonly focus_entered: Signal<() => void>
        
        /** Emitted when the [Window] loses its focus. */
        readonly focus_exited: Signal<() => void>
        
        /** Emitted when the [Window]'s close button is pressed or when [member popup_window] is enabled and user clicks outside the window.  
         *  This signal can be used to handle window closing, e.g. by connecting it to [method hide].  
         */
        readonly close_requested: Signal<() => void>
        
        /** Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [constant Node.NOTIFICATION_WM_GO_BACK_REQUEST]. */
        readonly go_back_requested: Signal<() => void>
        
        /** Emitted when [Window] is made visible or disappears. */
        readonly visibility_changed: Signal<() => void>
        
        /** Emitted right after [method popup] call, before the [Window] appears or does anything. */
        readonly about_to_popup: Signal<() => void>
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly theme_changed: Signal<() => void>
        
        /** Emitted when the [Window]'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).  
         *      
         *  **Note:** Only implemented on macOS.  
         */
        readonly dpi_changed: Signal<() => void>
        
        /** Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed. */
        readonly titlebar_changed: Signal<() => void>
        
        /** Emitted when window title bar text is changed. */
        readonly title_changed: Signal<() => void>
    }
    /** A resource that holds all components of a 2D world, such as a canvas and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_world2d.html  
     */
    class World2D extends Resource {
        constructor(identifier?: any)
        /** The [RID] of this world's canvas resource. Used by the [RenderingServer] for 2D drawing. */
        get canvas(): RID
        
        /** The [RID] of this world's physics space resource. Used by the [PhysicsServer2D] for 2D physics, treating it as both a space and an area. */
        get space(): RID
        
        /** The [RID] of this world's navigation map. Used by the [NavigationServer2D]. */
        get navigation_map(): RID
        
        /** Direct access to the world's physics 2D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        get direct_space_state(): null | PhysicsDirectSpaceState2D
    }
    /** A resource that holds all components of a 3D world, such as a visual scenario and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_world3d.html  
     */
    class World3D extends Resource {
        constructor(identifier?: any)
        /** The World3D's [Environment]. */
        get environment(): null | Environment
        set environment(value: null | Environment)
        
        /** The World3D's fallback environment will be used if [member environment] fails or is missing. */
        get fallback_environment(): null | Environment
        set fallback_environment(value: null | Environment)
        
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        get camera_attributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The World3D's physics space. */
        get space(): RID
        
        /** The [RID] of this world's navigation map. Used by the [NavigationServer3D]. */
        get navigation_map(): RID
        
        /** The World3D's visual scenario. */
        get scenario(): RID
        
        /** Direct access to the world's physics 3D space state. Used for querying current and potential collisions. When using multi-threaded physics, access is limited to [method Node._physics_process] in the main thread. */
        get direct_space_state(): null | PhysicsDirectSpaceState3D
    }
    /** A 2D world boundary (half-plane) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_worldboundaryshape2d.html  
     */
    class WorldBoundaryShape2D extends Shape2D {
        constructor(identifier?: any)
        /** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
        get normal(): Vector2
        set normal(value: Vector2)
        
        /** The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.  
         *  In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [member normal] property.  
         */
        get distance(): float64
        set distance(value: float64)
    }
    /** A 3D world boundary (half-space) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_worldboundaryshape3d.html  
     */
    class WorldBoundaryShape3D extends Shape3D {
        constructor(identifier?: any)
        /** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
        get plane(): Plane
        set plane(value: Plane)
    }
    /** Default environment properties for the entire scene (post-processing effects, lighting and background settings).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_worldenvironment.html  
     */
    class WorldEnvironment<Map extends NodePathMap = any> extends Node<Map> {
        constructor(identifier?: any)
        /** The [Environment] resource used by this [WorldEnvironment], defining the default properties. */
        get environment(): null | Environment
        set environment(value: null | Environment)
        
        /** The default [CameraAttributes] resource to use if none set on the [Camera3D]. */
        get camera_attributes(): null | CameraAttributesPractical | CameraAttributesPhysical
        set camera_attributes(value: null | CameraAttributesPractical | CameraAttributesPhysical)
        
        /** The default [Compositor] resource to use if none set on the [Camera3D]. */
        get compositor(): null | Compositor
        set compositor(value: null | Compositor)
    }
    /** An X509 certificate (e.g. for TLS).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_x509certificate.html  
     */
    class X509Certificate extends Resource {
        constructor(identifier?: any)
        /** Saves a certificate to the given [param path] (should be a "*.crt" file). */
        save(path: string): Error
        
        /** Loads a certificate from [param path] ("*.crt" file). */
        load(path: string): Error
        
        /** Returns a string representation of the certificate, or an empty string if the certificate is invalid. */
        save_to_string(): string
        
        /** Loads a certificate from the given [param string]. */
        load_from_string(string_: string): Error
    }
    namespace XMLParser {
        enum NodeType {
            /** There's no node (no file or buffer opened). */
            NODE_NONE = 0,
            
            /** An element node type, also known as a tag, e.g. `<title>`. */
            NODE_ELEMENT = 1,
            
            /** An end of element node type, e.g. `</title>`. */
            NODE_ELEMENT_END = 2,
            
            /** A text node type, i.e. text that is not inside an element. This includes whitespace. */
            NODE_TEXT = 3,
            
            /** A comment node type, e.g. `<!--A comment-->`. */
            NODE_COMMENT = 4,
            
            /** A node type for CDATA (Character Data) sections, e.g. `<![CDATA[CDATA section]]>`. */
            NODE_CDATA = 5,
            
            /** An unknown node type. */
            NODE_UNKNOWN = 6,
        }
    }
    /** Provides a low-level interface for creating parsers for XML files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xmlparser.html  
     */
    class XMLParser extends RefCounted {
        constructor(identifier?: any)
        /** Parses the next node in the file. This method returns an error code. */
        read(): Error
        
        /** Returns the type of the current node. Compare with [enum NodeType] constants. */
        get_node_type(): XMLParser.NodeType
        
        /** Returns the name of a node. This method will raise an error if the currently parsed node is a text node.  
         *      
         *  **Note:** The content of a [constant NODE_CDATA] node and the comment string of a [constant NODE_COMMENT] node are also considered names.  
         */
        get_node_name(): string
        
        /** Returns the contents of a text node. This method will raise an error if the current parsed node is of any other type. */
        get_node_data(): string
        
        /** Returns the byte offset of the currently parsed node since the beginning of the file or buffer. This is usually equivalent to the number of characters before the read position. */
        get_node_offset(): int64
        
        /** Returns the number of attributes in the currently parsed element.  
         *      
         *  **Note:** If this method is used while the currently parsed node is not [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END], this count will not be updated and will still reflect the last element.  
         */
        get_attribute_count(): int64
        
        /** Returns the name of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_name(idx: int64): string
        
        /** Returns the value of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_value(idx: int64): string
        
        /** Returns `true` if the currently parsed element has an attribute with the [param name]. */
        has_attribute(name: string): boolean
        
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will raise an error if the element has no such attribute. */
        get_named_attribute_value(name: string): string
        
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will return an empty string if the element has no such attribute. */
        get_named_attribute_value_safe(name: string): string
        
        /** Returns `true` if the currently parsed element is empty, e.g. `<element />`. */
        is_empty(): boolean
        
        /** Returns the current line in the parsed file, counting from 0. */
        get_current_line(): int64
        
        /** Skips the current section. If the currently parsed node contains more inner nodes, they will be ignored and the cursor will go to the closing of the current element. */
        skip_section(): void
        
        /** Moves the buffer cursor to a certain offset (since the beginning) and reads the next node there. This method returns an error code. */
        seek(position: int64): Error
        
        /** Opens an XML [param file] for parsing. This method returns an error code. */
        open(file: string): Error
        
        /** Opens an XML raw [param buffer] for parsing. This method returns an error code. */
        open_buffer(buffer: PackedByteArray | byte[] | ArrayBuffer): Error
    }
    /** An anchor point in AR space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xranchor3d.html  
     */
    class XRAnchor3D<Map extends NodePathMap = any> extends XRNode3D<Map> {
        constructor(identifier?: any)
        /** Returns the estimated size of the plane that was detected. Say when the anchor relates to a table in the real world, this is the estimated size of the surface of that table. */
        get_size(): Vector3
        
        /** Returns a plane aligned with our anchor; handy for intersection testing. */
        get_plane(): Plane
    }
    namespace XRBodyModifier3D {
        enum BodyUpdate {
            /** The skeleton's upper body joints are updated. */
            BODY_UPDATE_UPPER_BODY = 1,
            
            /** The skeleton's lower body joints are updated. */
            BODY_UPDATE_LOWER_BODY = 2,
            
            /** The skeleton's hand joints are updated. */
            BODY_UPDATE_HANDS = 4,
        }
        enum BoneUpdate {
            /** The skeleton's bones are fully updated (both position and rotation) to match the tracked bones. */
            BONE_UPDATE_FULL = 0,
            
            /** The skeleton's bones are only rotated to align with the tracked bones, preserving bone length. */
            BONE_UPDATE_ROTATION_ONLY = 1,
            
            /** Represents the size of the [enum BoneUpdate] enum. */
            BONE_UPDATE_MAX = 2,
        }
    }
    /** A node for driving body meshes from [XRBodyTracker] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrbodymodifier3d.html  
     */
    class XRBodyModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** The name of the [XRBodyTracker] registered with [XRServer] to obtain the body tracking data from. */
        get body_tracker(): string
        set body_tracker(value: string)
        
        /** Specifies the body parts to update. */
        get body_update(): int64
        set body_update(value: int64)
        
        /** Specifies the type of updates to perform on the bones. */
        get bone_update(): int64
        set bone_update(value: int64)
    }
    namespace XRBodyTracker {
        enum BodyFlags {
            /** Upper body tracking supported. */
            BODY_FLAG_UPPER_BODY_SUPPORTED = 1,
            
            /** Lower body tracking supported. */
            BODY_FLAG_LOWER_BODY_SUPPORTED = 2,
            
            /** Hand tracking supported. */
            BODY_FLAG_HANDS_SUPPORTED = 4,
        }
        enum Joint {
            /** Root joint. */
            JOINT_ROOT = 0,
            
            /** Hips joint. */
            JOINT_HIPS = 1,
            
            /** Spine joint. */
            JOINT_SPINE = 2,
            
            /** Chest joint. */
            JOINT_CHEST = 3,
            
            /** Upper chest joint. */
            JOINT_UPPER_CHEST = 4,
            
            /** Neck joint. */
            JOINT_NECK = 5,
            
            /** Head joint. */
            JOINT_HEAD = 6,
            
            /** Head tip joint. */
            JOINT_HEAD_TIP = 7,
            
            /** Left shoulder joint. */
            JOINT_LEFT_SHOULDER = 8,
            
            /** Left upper arm joint. */
            JOINT_LEFT_UPPER_ARM = 9,
            
            /** Left lower arm joint. */
            JOINT_LEFT_LOWER_ARM = 10,
            
            /** Right shoulder joint. */
            JOINT_RIGHT_SHOULDER = 11,
            
            /** Right upper arm joint. */
            JOINT_RIGHT_UPPER_ARM = 12,
            
            /** Right lower arm joint. */
            JOINT_RIGHT_LOWER_ARM = 13,
            
            /** Left upper leg joint. */
            JOINT_LEFT_UPPER_LEG = 14,
            
            /** Left lower leg joint. */
            JOINT_LEFT_LOWER_LEG = 15,
            
            /** Left foot joint. */
            JOINT_LEFT_FOOT = 16,
            
            /** Left toes joint. */
            JOINT_LEFT_TOES = 17,
            
            /** Right upper leg joint. */
            JOINT_RIGHT_UPPER_LEG = 18,
            
            /** Right lower leg joint. */
            JOINT_RIGHT_LOWER_LEG = 19,
            
            /** Right foot joint. */
            JOINT_RIGHT_FOOT = 20,
            
            /** Right toes joint. */
            JOINT_RIGHT_TOES = 21,
            
            /** Left hand joint. */
            JOINT_LEFT_HAND = 22,
            
            /** Left palm joint. */
            JOINT_LEFT_PALM = 23,
            
            /** Left wrist joint. */
            JOINT_LEFT_WRIST = 24,
            
            /** Left thumb metacarpal joint. */
            JOINT_LEFT_THUMB_METACARPAL = 25,
            
            /** Left thumb phalanx proximal joint. */
            JOINT_LEFT_THUMB_PHALANX_PROXIMAL = 26,
            
            /** Left thumb phalanx distal joint. */
            JOINT_LEFT_THUMB_PHALANX_DISTAL = 27,
            
            /** Left thumb tip joint. */
            JOINT_LEFT_THUMB_TIP = 28,
            
            /** Left index finger metacarpal joint. */
            JOINT_LEFT_INDEX_FINGER_METACARPAL = 29,
            
            /** Left index finger phalanx proximal joint. */
            JOINT_LEFT_INDEX_FINGER_PHALANX_PROXIMAL = 30,
            
            /** Left index finger phalanx intermediate joint. */
            JOINT_LEFT_INDEX_FINGER_PHALANX_INTERMEDIATE = 31,
            
            /** Left index finger phalanx distal joint. */
            JOINT_LEFT_INDEX_FINGER_PHALANX_DISTAL = 32,
            
            /** Left index finger tip joint. */
            JOINT_LEFT_INDEX_FINGER_TIP = 33,
            
            /** Left middle finger metacarpal joint. */
            JOINT_LEFT_MIDDLE_FINGER_METACARPAL = 34,
            
            /** Left middle finger phalanx proximal joint. */
            JOINT_LEFT_MIDDLE_FINGER_PHALANX_PROXIMAL = 35,
            
            /** Left middle finger phalanx intermediate joint. */
            JOINT_LEFT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 36,
            
            /** Left middle finger phalanx distal joint. */
            JOINT_LEFT_MIDDLE_FINGER_PHALANX_DISTAL = 37,
            
            /** Left middle finger tip joint. */
            JOINT_LEFT_MIDDLE_FINGER_TIP = 38,
            
            /** Left ring finger metacarpal joint. */
            JOINT_LEFT_RING_FINGER_METACARPAL = 39,
            
            /** Left ring finger phalanx proximal joint. */
            JOINT_LEFT_RING_FINGER_PHALANX_PROXIMAL = 40,
            
            /** Left ring finger phalanx intermediate joint. */
            JOINT_LEFT_RING_FINGER_PHALANX_INTERMEDIATE = 41,
            
            /** Left ring finger phalanx distal joint. */
            JOINT_LEFT_RING_FINGER_PHALANX_DISTAL = 42,
            
            /** Left ring finger tip joint. */
            JOINT_LEFT_RING_FINGER_TIP = 43,
            
            /** Left pinky finger metacarpal joint. */
            JOINT_LEFT_PINKY_FINGER_METACARPAL = 44,
            
            /** Left pinky finger phalanx proximal joint. */
            JOINT_LEFT_PINKY_FINGER_PHALANX_PROXIMAL = 45,
            
            /** Left pinky finger phalanx intermediate joint. */
            JOINT_LEFT_PINKY_FINGER_PHALANX_INTERMEDIATE = 46,
            
            /** Left pinky finger phalanx distal joint. */
            JOINT_LEFT_PINKY_FINGER_PHALANX_DISTAL = 47,
            
            /** Left pinky finger tip joint. */
            JOINT_LEFT_PINKY_FINGER_TIP = 48,
            
            /** Right hand joint. */
            JOINT_RIGHT_HAND = 49,
            
            /** Right palm joint. */
            JOINT_RIGHT_PALM = 50,
            
            /** Right wrist joint. */
            JOINT_RIGHT_WRIST = 51,
            
            /** Right thumb metacarpal joint. */
            JOINT_RIGHT_THUMB_METACARPAL = 52,
            
            /** Right thumb phalanx proximal joint. */
            JOINT_RIGHT_THUMB_PHALANX_PROXIMAL = 53,
            
            /** Right thumb phalanx distal joint. */
            JOINT_RIGHT_THUMB_PHALANX_DISTAL = 54,
            
            /** Right thumb tip joint. */
            JOINT_RIGHT_THUMB_TIP = 55,
            
            /** Right index finger metacarpal joint. */
            JOINT_RIGHT_INDEX_FINGER_METACARPAL = 56,
            
            /** Right index finger phalanx proximal joint. */
            JOINT_RIGHT_INDEX_FINGER_PHALANX_PROXIMAL = 57,
            
            /** Right index finger phalanx intermediate joint. */
            JOINT_RIGHT_INDEX_FINGER_PHALANX_INTERMEDIATE = 58,
            
            /** Right index finger phalanx distal joint. */
            JOINT_RIGHT_INDEX_FINGER_PHALANX_DISTAL = 59,
            
            /** Right index finger tip joint. */
            JOINT_RIGHT_INDEX_FINGER_TIP = 60,
            
            /** Right middle finger metacarpal joint. */
            JOINT_RIGHT_MIDDLE_FINGER_METACARPAL = 61,
            
            /** Right middle finger phalanx proximal joint. */
            JOINT_RIGHT_MIDDLE_FINGER_PHALANX_PROXIMAL = 62,
            
            /** Right middle finger phalanx intermediate joint. */
            JOINT_RIGHT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 63,
            
            /** Right middle finger phalanx distal joint. */
            JOINT_RIGHT_MIDDLE_FINGER_PHALANX_DISTAL = 64,
            
            /** Right middle finger tip joint. */
            JOINT_RIGHT_MIDDLE_FINGER_TIP = 65,
            
            /** Right ring finger metacarpal joint. */
            JOINT_RIGHT_RING_FINGER_METACARPAL = 66,
            
            /** Right ring finger phalanx proximal joint. */
            JOINT_RIGHT_RING_FINGER_PHALANX_PROXIMAL = 67,
            
            /** Right ring finger phalanx intermediate joint. */
            JOINT_RIGHT_RING_FINGER_PHALANX_INTERMEDIATE = 68,
            
            /** Right ring finger phalanx distal joint. */
            JOINT_RIGHT_RING_FINGER_PHALANX_DISTAL = 69,
            
            /** Right ring finger tip joint. */
            JOINT_RIGHT_RING_FINGER_TIP = 70,
            
            /** Right pinky finger metacarpal joint. */
            JOINT_RIGHT_PINKY_FINGER_METACARPAL = 71,
            
            /** Right pinky finger phalanx proximal joint. */
            JOINT_RIGHT_PINKY_FINGER_PHALANX_PROXIMAL = 72,
            
            /** Right pinky finger phalanx intermediate joint. */
            JOINT_RIGHT_PINKY_FINGER_PHALANX_INTERMEDIATE = 73,
            
            /** Right pinky finger phalanx distal joint. */
            JOINT_RIGHT_PINKY_FINGER_PHALANX_DISTAL = 74,
            
            /** Right pinky finger tip joint. */
            JOINT_RIGHT_PINKY_FINGER_TIP = 75,
            
            /** Represents the size of the [enum Joint] enum. */
            JOINT_MAX = 76,
        }
        enum JointFlags {
            /** The joint's orientation data is valid. */
            JOINT_FLAG_ORIENTATION_VALID = 1,
            
            /** The joint's orientation is actively tracked. May not be set if tracking has been temporarily lost. */
            JOINT_FLAG_ORIENTATION_TRACKED = 2,
            
            /** The joint's position data is valid. */
            JOINT_FLAG_POSITION_VALID = 4,
            
            /** The joint's position is actively tracked. May not be set if tracking has been temporarily lost. */
            JOINT_FLAG_POSITION_TRACKED = 8,
        }
    }
    /** A tracked body in XR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrbodytracker.html  
     */
    class XRBodyTracker extends XRPositionalTracker {
        constructor(identifier?: any)
        /** Sets flags about the validity of the tracking data for the given body joint. */
        set_joint_flags(joint: XRBodyTracker.Joint, flags: XRBodyTracker.JointFlags): void
        
        /** Returns flags about the validity of the tracking data for the given body joint (see [enum XRBodyTracker.JointFlags]). */
        get_joint_flags(joint: XRBodyTracker.Joint): XRBodyTracker.JointFlags
        
        /** Sets the transform for the given body joint. */
        set_joint_transform(joint: XRBodyTracker.Joint, transform: Transform3D): void
        
        /** Returns the transform for the given body joint. */
        get_joint_transform(joint: XRBodyTracker.Joint): Transform3D
        
        /** If `true`, the body tracking data is valid. */
        get has_tracking_data(): boolean
        set has_tracking_data(value: boolean)
        
        /** The type of body tracking data captured. */
        get body_flags(): int64
        set body_flags(value: int64)
    }
    /** A camera node with a few overrules for AR/VR applied, such as location tracking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrcamera3d.html  
     */
    class XRCamera3D<Map extends NodePathMap = any> extends Camera3D<Map> {
        constructor(identifier?: any)
    }
    /** A 3D node representing a spatially-tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrcontroller3d.html  
     */
    class XRController3D<Map extends NodePathMap = any> extends XRNode3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the button with the given [param name] is pressed. */
        is_button_pressed(name: StringName): boolean
        
        /** Returns a [Variant] for the input with the given [param name]. This works for any input type, the variant will be typed according to the actions configuration. */
        get_input(name: StringName): any
        
        /** Returns a numeric value for the input with the given [param name]. This is used for triggers and grip sensors. */
        get_float(name: StringName): float64
        
        /** Returns a [Vector2] for the input with the given [param name]. This is used for thumbsticks and thumbpads found on many controllers. */
        get_vector2(name: StringName): Vector2
        
        /** Returns the hand holding this controller, if known. See [enum XRPositionalTracker.TrackerHand]. */
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        
        /** Emitted when a button on this controller is pressed. */
        readonly button_pressed: Signal<(name: string) => void>
        
        /** Emitted when a button on this controller is released. */
        readonly button_released: Signal<(name: string) => void>
        
        /** Emitted when a trigger or similar input on this controller changes value. */
        readonly input_float_changed: Signal<(name: string, value: float64) => void>
        
        /** Emitted when a thumbstick or thumbpad on this controller is moved. */
        readonly input_vector2_changed: Signal<(name: string, value: Vector2) => void>
        
        /** Emitted when the interaction profile on this controller is changed. */
        readonly profile_changed: Signal<(role: string) => void>
    }
    /** A tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrcontrollertracker.html  
     */
    class XRControllerTracker extends XRPositionalTracker {
        constructor(identifier?: any)
    }
    /** A node for driving standard face meshes from [XRFaceTracker] weights.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrfacemodifier3d.html  
     */
    class XRFaceModifier3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** The [XRFaceTracker] path. */
        get face_tracker(): string
        set face_tracker(value: string)
        
        /** The [NodePath] of the face [MeshInstance3D]. */
        get target(): NodePath
        set target(value: NodePath | string)
    }
    namespace XRFaceTracker {
        enum BlendShapeEntry {
            /** Right eye looks outwards. */
            FT_EYE_LOOK_OUT_RIGHT = 0,
            
            /** Right eye looks inwards. */
            FT_EYE_LOOK_IN_RIGHT = 1,
            
            /** Right eye looks upwards. */
            FT_EYE_LOOK_UP_RIGHT = 2,
            
            /** Right eye looks downwards. */
            FT_EYE_LOOK_DOWN_RIGHT = 3,
            
            /** Left eye looks outwards. */
            FT_EYE_LOOK_OUT_LEFT = 4,
            
            /** Left eye looks inwards. */
            FT_EYE_LOOK_IN_LEFT = 5,
            
            /** Left eye looks upwards. */
            FT_EYE_LOOK_UP_LEFT = 6,
            
            /** Left eye looks downwards. */
            FT_EYE_LOOK_DOWN_LEFT = 7,
            
            /** Closes the right eyelid. */
            FT_EYE_CLOSED_RIGHT = 8,
            
            /** Closes the left eyelid. */
            FT_EYE_CLOSED_LEFT = 9,
            
            /** Squeezes the right eye socket muscles. */
            FT_EYE_SQUINT_RIGHT = 10,
            
            /** Squeezes the left eye socket muscles. */
            FT_EYE_SQUINT_LEFT = 11,
            
            /** Right eyelid widens beyond relaxed. */
            FT_EYE_WIDE_RIGHT = 12,
            
            /** Left eyelid widens beyond relaxed. */
            FT_EYE_WIDE_LEFT = 13,
            
            /** Dilates the right eye pupil. */
            FT_EYE_DILATION_RIGHT = 14,
            
            /** Dilates the left eye pupil. */
            FT_EYE_DILATION_LEFT = 15,
            
            /** Constricts the right eye pupil. */
            FT_EYE_CONSTRICT_RIGHT = 16,
            
            /** Constricts the left eye pupil. */
            FT_EYE_CONSTRICT_LEFT = 17,
            
            /** Right eyebrow pinches in. */
            FT_BROW_PINCH_RIGHT = 18,
            
            /** Left eyebrow pinches in. */
            FT_BROW_PINCH_LEFT = 19,
            
            /** Outer right eyebrow pulls down. */
            FT_BROW_LOWERER_RIGHT = 20,
            
            /** Outer left eyebrow pulls down. */
            FT_BROW_LOWERER_LEFT = 21,
            
            /** Inner right eyebrow pulls up. */
            FT_BROW_INNER_UP_RIGHT = 22,
            
            /** Inner left eyebrow pulls up. */
            FT_BROW_INNER_UP_LEFT = 23,
            
            /** Outer right eyebrow pulls up. */
            FT_BROW_OUTER_UP_RIGHT = 24,
            
            /** Outer left eyebrow pulls up. */
            FT_BROW_OUTER_UP_LEFT = 25,
            
            /** Right side face sneers. */
            FT_NOSE_SNEER_RIGHT = 26,
            
            /** Left side face sneers. */
            FT_NOSE_SNEER_LEFT = 27,
            
            /** Right side nose canal dilates. */
            FT_NASAL_DILATION_RIGHT = 28,
            
            /** Left side nose canal dilates. */
            FT_NASAL_DILATION_LEFT = 29,
            
            /** Right side nose canal constricts. */
            FT_NASAL_CONSTRICT_RIGHT = 30,
            
            /** Left side nose canal constricts. */
            FT_NASAL_CONSTRICT_LEFT = 31,
            
            /** Raises the right side cheek. */
            FT_CHEEK_SQUINT_RIGHT = 32,
            
            /** Raises the left side cheek. */
            FT_CHEEK_SQUINT_LEFT = 33,
            
            /** Puffs the right side cheek. */
            FT_CHEEK_PUFF_RIGHT = 34,
            
            /** Puffs the left side cheek. */
            FT_CHEEK_PUFF_LEFT = 35,
            
            /** Sucks in the right side cheek. */
            FT_CHEEK_SUCK_RIGHT = 36,
            
            /** Sucks in the left side cheek. */
            FT_CHEEK_SUCK_LEFT = 37,
            
            /** Opens jawbone. */
            FT_JAW_OPEN = 38,
            
            /** Closes the mouth. */
            FT_MOUTH_CLOSED = 39,
            
            /** Pushes jawbone right. */
            FT_JAW_RIGHT = 40,
            
            /** Pushes jawbone left. */
            FT_JAW_LEFT = 41,
            
            /** Pushes jawbone forward. */
            FT_JAW_FORWARD = 42,
            
            /** Pushes jawbone backward. */
            FT_JAW_BACKWARD = 43,
            
            /** Flexes jaw muscles. */
            FT_JAW_CLENCH = 44,
            
            /** Raises the jawbone. */
            FT_JAW_MANDIBLE_RAISE = 45,
            
            /** Upper right lip part tucks in the mouth. */
            FT_LIP_SUCK_UPPER_RIGHT = 46,
            
            /** Upper left lip part tucks in the mouth. */
            FT_LIP_SUCK_UPPER_LEFT = 47,
            
            /** Lower right lip part tucks in the mouth. */
            FT_LIP_SUCK_LOWER_RIGHT = 48,
            
            /** Lower left lip part tucks in the mouth. */
            FT_LIP_SUCK_LOWER_LEFT = 49,
            
            /** Right lip corner folds into the mouth. */
            FT_LIP_SUCK_CORNER_RIGHT = 50,
            
            /** Left lip corner folds into the mouth. */
            FT_LIP_SUCK_CORNER_LEFT = 51,
            
            /** Upper right lip part pushes into a funnel. */
            FT_LIP_FUNNEL_UPPER_RIGHT = 52,
            
            /** Upper left lip part pushes into a funnel. */
            FT_LIP_FUNNEL_UPPER_LEFT = 53,
            
            /** Lower right lip part pushes into a funnel. */
            FT_LIP_FUNNEL_LOWER_RIGHT = 54,
            
            /** Lower left lip part pushes into a funnel. */
            FT_LIP_FUNNEL_LOWER_LEFT = 55,
            
            /** Upper right lip part pushes outwards. */
            FT_LIP_PUCKER_UPPER_RIGHT = 56,
            
            /** Upper left lip part pushes outwards. */
            FT_LIP_PUCKER_UPPER_LEFT = 57,
            
            /** Lower right lip part pushes outwards. */
            FT_LIP_PUCKER_LOWER_RIGHT = 58,
            
            /** Lower left lip part pushes outwards. */
            FT_LIP_PUCKER_LOWER_LEFT = 59,
            
            /** Upper right part of the lip pulls up. */
            FT_MOUTH_UPPER_UP_RIGHT = 60,
            
            /** Upper left part of the lip pulls up. */
            FT_MOUTH_UPPER_UP_LEFT = 61,
            
            /** Lower right part of the lip pulls up. */
            FT_MOUTH_LOWER_DOWN_RIGHT = 62,
            
            /** Lower left part of the lip pulls up. */
            FT_MOUTH_LOWER_DOWN_LEFT = 63,
            
            /** Upper right lip part pushes in the cheek. */
            FT_MOUTH_UPPER_DEEPEN_RIGHT = 64,
            
            /** Upper left lip part pushes in the cheek. */
            FT_MOUTH_UPPER_DEEPEN_LEFT = 65,
            
            /** Moves upper lip right. */
            FT_MOUTH_UPPER_RIGHT = 66,
            
            /** Moves upper lip left. */
            FT_MOUTH_UPPER_LEFT = 67,
            
            /** Moves lower lip right. */
            FT_MOUTH_LOWER_RIGHT = 68,
            
            /** Moves lower lip left. */
            FT_MOUTH_LOWER_LEFT = 69,
            
            /** Right lip corner pulls diagonally up and out. */
            FT_MOUTH_CORNER_PULL_RIGHT = 70,
            
            /** Left lip corner pulls diagonally up and out. */
            FT_MOUTH_CORNER_PULL_LEFT = 71,
            
            /** Right corner lip slants up. */
            FT_MOUTH_CORNER_SLANT_RIGHT = 72,
            
            /** Left corner lip slants up. */
            FT_MOUTH_CORNER_SLANT_LEFT = 73,
            
            /** Right corner lip pulls down. */
            FT_MOUTH_FROWN_RIGHT = 74,
            
            /** Left corner lip pulls down. */
            FT_MOUTH_FROWN_LEFT = 75,
            
            /** Mouth corner lip pulls out and down. */
            FT_MOUTH_STRETCH_RIGHT = 76,
            
            /** Mouth corner lip pulls out and down. */
            FT_MOUTH_STRETCH_LEFT = 77,
            
            /** Right lip corner is pushed backwards. */
            FT_MOUTH_DIMPLE_RIGHT = 78,
            
            /** Left lip corner is pushed backwards. */
            FT_MOUTH_DIMPLE_LEFT = 79,
            
            /** Raises and slightly pushes out the upper mouth. */
            FT_MOUTH_RAISER_UPPER = 80,
            
            /** Raises and slightly pushes out the lower mouth. */
            FT_MOUTH_RAISER_LOWER = 81,
            
            /** Right side lips press and flatten together vertically. */
            FT_MOUTH_PRESS_RIGHT = 82,
            
            /** Left side lips press and flatten together vertically. */
            FT_MOUTH_PRESS_LEFT = 83,
            
            /** Right side lips squeeze together horizontally. */
            FT_MOUTH_TIGHTENER_RIGHT = 84,
            
            /** Left side lips squeeze together horizontally. */
            FT_MOUTH_TIGHTENER_LEFT = 85,
            
            /** Tongue visibly sticks out of the mouth. */
            FT_TONGUE_OUT = 86,
            
            /** Tongue points upwards. */
            FT_TONGUE_UP = 87,
            
            /** Tongue points downwards. */
            FT_TONGUE_DOWN = 88,
            
            /** Tongue points right. */
            FT_TONGUE_RIGHT = 89,
            
            /** Tongue points left. */
            FT_TONGUE_LEFT = 90,
            
            /** Sides of the tongue funnel, creating a roll. */
            FT_TONGUE_ROLL = 91,
            
            /** Tongue arches up then down inside the mouth. */
            FT_TONGUE_BLEND_DOWN = 92,
            
            /** Tongue arches down then up inside the mouth. */
            FT_TONGUE_CURL_UP = 93,
            
            /** Tongue squishes together and thickens. */
            FT_TONGUE_SQUISH = 94,
            
            /** Tongue flattens and thins out. */
            FT_TONGUE_FLAT = 95,
            
            /** Tongue tip rotates clockwise, with the rest following gradually. */
            FT_TONGUE_TWIST_RIGHT = 96,
            
            /** Tongue tip rotates counter-clockwise, with the rest following gradually. */
            FT_TONGUE_TWIST_LEFT = 97,
            
            /** Inner mouth throat closes. */
            FT_SOFT_PALATE_CLOSE = 98,
            
            /** The Adam's apple visibly swallows. */
            FT_THROAT_SWALLOW = 99,
            
            /** Right side neck visibly flexes. */
            FT_NECK_FLEX_RIGHT = 100,
            
            /** Left side neck visibly flexes. */
            FT_NECK_FLEX_LEFT = 101,
            
            /** Closes both eye lids. */
            FT_EYE_CLOSED = 102,
            
            /** Widens both eye lids. */
            FT_EYE_WIDE = 103,
            
            /** Squints both eye lids. */
            FT_EYE_SQUINT = 104,
            
            /** Dilates both pupils. */
            FT_EYE_DILATION = 105,
            
            /** Constricts both pupils. */
            FT_EYE_CONSTRICT = 106,
            
            /** Pulls the right eyebrow down and in. */
            FT_BROW_DOWN_RIGHT = 107,
            
            /** Pulls the left eyebrow down and in. */
            FT_BROW_DOWN_LEFT = 108,
            
            /** Pulls both eyebrows down and in. */
            FT_BROW_DOWN = 109,
            
            /** Right brow appears worried. */
            FT_BROW_UP_RIGHT = 110,
            
            /** Left brow appears worried. */
            FT_BROW_UP_LEFT = 111,
            
            /** Both brows appear worried. */
            FT_BROW_UP = 112,
            
            /** Entire face sneers. */
            FT_NOSE_SNEER = 113,
            
            /** Both nose canals dilate. */
            FT_NASAL_DILATION = 114,
            
            /** Both nose canals constrict. */
            FT_NASAL_CONSTRICT = 115,
            
            /** Puffs both cheeks. */
            FT_CHEEK_PUFF = 116,
            
            /** Sucks in both cheeks. */
            FT_CHEEK_SUCK = 117,
            
            /** Raises both cheeks. */
            FT_CHEEK_SQUINT = 118,
            
            /** Tucks in the upper lips. */
            FT_LIP_SUCK_UPPER = 119,
            
            /** Tucks in the lower lips. */
            FT_LIP_SUCK_LOWER = 120,
            
            /** Tucks in both lips. */
            FT_LIP_SUCK = 121,
            
            /** Funnels in the upper lips. */
            FT_LIP_FUNNEL_UPPER = 122,
            
            /** Funnels in the lower lips. */
            FT_LIP_FUNNEL_LOWER = 123,
            
            /** Funnels in both lips. */
            FT_LIP_FUNNEL = 124,
            
            /** Upper lip part pushes outwards. */
            FT_LIP_PUCKER_UPPER = 125,
            
            /** Lower lip part pushes outwards. */
            FT_LIP_PUCKER_LOWER = 126,
            
            /** Lips push outwards. */
            FT_LIP_PUCKER = 127,
            
            /** Raises the upper lips. */
            FT_MOUTH_UPPER_UP = 128,
            
            /** Lowers the lower lips. */
            FT_MOUTH_LOWER_DOWN = 129,
            
            /** Mouth opens, revealing teeth. */
            FT_MOUTH_OPEN = 130,
            
            /** Moves mouth right. */
            FT_MOUTH_RIGHT = 131,
            
            /** Moves mouth left. */
            FT_MOUTH_LEFT = 132,
            
            /** Right side of the mouth smiles. */
            FT_MOUTH_SMILE_RIGHT = 133,
            
            /** Left side of the mouth smiles. */
            FT_MOUTH_SMILE_LEFT = 134,
            
            /** Mouth expresses a smile. */
            FT_MOUTH_SMILE = 135,
            
            /** Right side of the mouth expresses sadness. */
            FT_MOUTH_SAD_RIGHT = 136,
            
            /** Left side of the mouth expresses sadness. */
            FT_MOUTH_SAD_LEFT = 137,
            
            /** Mouth expresses sadness. */
            FT_MOUTH_SAD = 138,
            
            /** Mouth stretches. */
            FT_MOUTH_STRETCH = 139,
            
            /** Lip corners dimple. */
            FT_MOUTH_DIMPLE = 140,
            
            /** Mouth tightens. */
            FT_MOUTH_TIGHTENER = 141,
            
            /** Mouth presses together. */
            FT_MOUTH_PRESS = 142,
            
            /** Represents the size of the [enum BlendShapeEntry] enum. */
            FT_MAX = 143,
        }
    }
    /** A tracked face.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrfacetracker.html  
     */
    class XRFaceTracker extends XRTracker {
        constructor(identifier?: any)
        /** Returns the requested face blend shape weight. */
        get_blend_shape(blend_shape: XRFaceTracker.BlendShapeEntry): float64
        
        /** Sets a face blend shape weight. */
        set_blend_shape(blend_shape: XRFaceTracker.BlendShapeEntry, weight: float64): void
        
        /** The array of face blend shape weights with indices corresponding to the [enum BlendShapeEntry] enum. */
        get blend_shapes(): PackedFloat32Array
        set blend_shapes(value: PackedFloat32Array | float32[])
    }
    namespace XRHandModifier3D {
        enum BoneUpdate {
            /** The skeleton's bones are fully updated (both position and rotation) to match the tracked bones. */
            BONE_UPDATE_FULL = 0,
            
            /** The skeleton's bones are only rotated to align with the tracked bones, preserving bone length. */
            BONE_UPDATE_ROTATION_ONLY = 1,
            
            /** Represents the size of the [enum BoneUpdate] enum. */
            BONE_UPDATE_MAX = 2,
        }
    }
    /** A node for driving hand meshes from [XRHandTracker] data.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrhandmodifier3d.html  
     */
    class XRHandModifier3D<Map extends NodePathMap = any> extends SkeletonModifier3D<Map> {
        constructor(identifier?: any)
        /** The name of the [XRHandTracker] registered with [XRServer] to obtain the hand tracking data from. */
        get hand_tracker(): string
        set hand_tracker(value: string)
        
        /** Specifies the type of updates to perform on the bones. */
        get bone_update(): int64
        set bone_update(value: int64)
    }
    namespace XRHandTracker {
        enum HandTrackingSource {
            /** The source of hand tracking data is unknown. */
            HAND_TRACKING_SOURCE_UNKNOWN = 0,
            
            /** The source of hand tracking data is unobstructed, meaning that an accurate method of hand tracking is used. These include optical hand tracking, data gloves, etc. */
            HAND_TRACKING_SOURCE_UNOBSTRUCTED = 1,
            
            /** The source of hand tracking data is a controller, meaning that joint positions are inferred from controller inputs. */
            HAND_TRACKING_SOURCE_CONTROLLER = 2,
            
            /** No hand tracking data is tracked, this either means the hand is obscured, the controller is turned off, or tracking is not supported for the current input type. */
            HAND_TRACKING_SOURCE_NOT_TRACKED = 3,
            
            /** Represents the size of the [enum HandTrackingSource] enum. */
            HAND_TRACKING_SOURCE_MAX = 4,
        }
        enum HandJoint {
            /** Palm joint. */
            HAND_JOINT_PALM = 0,
            
            /** Wrist joint. */
            HAND_JOINT_WRIST = 1,
            
            /** Thumb metacarpal joint. */
            HAND_JOINT_THUMB_METACARPAL = 2,
            
            /** Thumb phalanx proximal joint. */
            HAND_JOINT_THUMB_PHALANX_PROXIMAL = 3,
            
            /** Thumb phalanx distal joint. */
            HAND_JOINT_THUMB_PHALANX_DISTAL = 4,
            
            /** Thumb tip joint. */
            HAND_JOINT_THUMB_TIP = 5,
            
            /** Index finger metacarpal joint. */
            HAND_JOINT_INDEX_FINGER_METACARPAL = 6,
            
            /** Index finger phalanx proximal joint. */
            HAND_JOINT_INDEX_FINGER_PHALANX_PROXIMAL = 7,
            
            /** Index finger phalanx intermediate joint. */
            HAND_JOINT_INDEX_FINGER_PHALANX_INTERMEDIATE = 8,
            
            /** Index finger phalanx distal joint. */
            HAND_JOINT_INDEX_FINGER_PHALANX_DISTAL = 9,
            
            /** Index finger tip joint. */
            HAND_JOINT_INDEX_FINGER_TIP = 10,
            
            /** Middle finger metacarpal joint. */
            HAND_JOINT_MIDDLE_FINGER_METACARPAL = 11,
            
            /** Middle finger phalanx proximal joint. */
            HAND_JOINT_MIDDLE_FINGER_PHALANX_PROXIMAL = 12,
            
            /** Middle finger phalanx intermediate joint. */
            HAND_JOINT_MIDDLE_FINGER_PHALANX_INTERMEDIATE = 13,
            
            /** Middle finger phalanx distal joint. */
            HAND_JOINT_MIDDLE_FINGER_PHALANX_DISTAL = 14,
            
            /** Middle finger tip joint. */
            HAND_JOINT_MIDDLE_FINGER_TIP = 15,
            
            /** Ring finger metacarpal joint. */
            HAND_JOINT_RING_FINGER_METACARPAL = 16,
            
            /** Ring finger phalanx proximal joint. */
            HAND_JOINT_RING_FINGER_PHALANX_PROXIMAL = 17,
            
            /** Ring finger phalanx intermediate joint. */
            HAND_JOINT_RING_FINGER_PHALANX_INTERMEDIATE = 18,
            
            /** Ring finger phalanx distal joint. */
            HAND_JOINT_RING_FINGER_PHALANX_DISTAL = 19,
            
            /** Ring finger tip joint. */
            HAND_JOINT_RING_FINGER_TIP = 20,
            
            /** Pinky finger metacarpal joint. */
            HAND_JOINT_PINKY_FINGER_METACARPAL = 21,
            
            /** Pinky finger phalanx proximal joint. */
            HAND_JOINT_PINKY_FINGER_PHALANX_PROXIMAL = 22,
            
            /** Pinky finger phalanx intermediate joint. */
            HAND_JOINT_PINKY_FINGER_PHALANX_INTERMEDIATE = 23,
            
            /** Pinky finger phalanx distal joint. */
            HAND_JOINT_PINKY_FINGER_PHALANX_DISTAL = 24,
            
            /** Pinky finger tip joint. */
            HAND_JOINT_PINKY_FINGER_TIP = 25,
            
            /** Represents the size of the [enum HandJoint] enum. */
            HAND_JOINT_MAX = 26,
        }
        enum HandJointFlags {
            /** The hand joint's orientation data is valid. */
            HAND_JOINT_FLAG_ORIENTATION_VALID = 1,
            
            /** The hand joint's orientation is actively tracked. May not be set if tracking has been temporarily lost. */
            HAND_JOINT_FLAG_ORIENTATION_TRACKED = 2,
            
            /** The hand joint's position data is valid. */
            HAND_JOINT_FLAG_POSITION_VALID = 4,
            
            /** The hand joint's position is actively tracked. May not be set if tracking has been temporarily lost. */
            HAND_JOINT_FLAG_POSITION_TRACKED = 8,
            
            /** The hand joint's linear velocity data is valid. */
            HAND_JOINT_FLAG_LINEAR_VELOCITY_VALID = 16,
            
            /** The hand joint's angular velocity data is valid. */
            HAND_JOINT_FLAG_ANGULAR_VELOCITY_VALID = 32,
        }
    }
    /** A tracked hand in XR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrhandtracker.html  
     */
    class XRHandTracker extends XRPositionalTracker {
        constructor(identifier?: any)
        /** Sets flags about the validity of the tracking data for the given hand joint. */
        set_hand_joint_flags(joint: XRHandTracker.HandJoint, flags: XRHandTracker.HandJointFlags): void
        
        /** Returns flags about the validity of the tracking data for the given hand joint (see [enum XRHandTracker.HandJointFlags]). */
        get_hand_joint_flags(joint: XRHandTracker.HandJoint): XRHandTracker.HandJointFlags
        
        /** Sets the transform for the given hand joint. */
        set_hand_joint_transform(joint: XRHandTracker.HandJoint, transform: Transform3D): void
        
        /** Returns the transform for the given hand joint. */
        get_hand_joint_transform(joint: XRHandTracker.HandJoint): Transform3D
        
        /** Sets the radius of the given hand joint. */
        set_hand_joint_radius(joint: XRHandTracker.HandJoint, radius: float64): void
        
        /** Returns the radius of the given hand joint. */
        get_hand_joint_radius(joint: XRHandTracker.HandJoint): float64
        
        /** Sets the linear velocity for the given hand joint. */
        set_hand_joint_linear_velocity(joint: XRHandTracker.HandJoint, linear_velocity: Vector3): void
        
        /** Returns the linear velocity for the given hand joint. */
        get_hand_joint_linear_velocity(joint: XRHandTracker.HandJoint): Vector3
        
        /** Sets the angular velocity for the given hand joint. */
        set_hand_joint_angular_velocity(joint: XRHandTracker.HandJoint, angular_velocity: Vector3): void
        
        /** Returns the angular velocity for the given hand joint. */
        get_hand_joint_angular_velocity(joint: XRHandTracker.HandJoint): Vector3
        
        /** If `true`, the hand tracking data is valid. */
        get has_tracking_data(): boolean
        set has_tracking_data(value: boolean)
        
        /** The source of the hand tracking data. */
        get hand_tracking_source(): int64
        set hand_tracking_source(value: int64)
    }
    namespace XRInterface {
        enum Capabilities {
            /** No XR capabilities. */
            XR_NONE = 0,
            
            /** This interface can work with normal rendering output (non-HMD based AR). */
            XR_MONO = 1,
            
            /** This interface supports stereoscopic rendering. */
            XR_STEREO = 2,
            
            /** This interface supports quad rendering (not yet supported by Godot). */
            XR_QUAD = 4,
            
            /** This interface supports VR. */
            XR_VR = 8,
            
            /** This interface supports AR (video background and real world tracking). */
            XR_AR = 16,
            
            /** This interface outputs to an external device. If the main viewport is used, the on screen output is an unmodified buffer of either the left or right eye (stretched if the viewport size is not changed to the same aspect ratio of [method get_render_target_size]). Using a separate viewport node frees up the main viewport for other purposes. */
            XR_EXTERNAL = 32,
        }
        enum TrackingStatus {
            /** Tracking is behaving as expected. */
            XR_NORMAL_TRACKING = 0,
            
            /** Tracking is hindered by excessive motion (the player is moving faster than tracking can keep up). */
            XR_EXCESSIVE_MOTION = 1,
            
            /** Tracking is hindered by insufficient features, it's too dark (for camera-based tracking), player is blocked, etc. */
            XR_INSUFFICIENT_FEATURES = 2,
            
            /** We don't know the status of the tracking or this interface does not provide feedback. */
            XR_UNKNOWN_TRACKING = 3,
            
            /** Tracking is not functional (camera not plugged in or obscured, lighthouses turned off, etc.). */
            XR_NOT_TRACKING = 4,
        }
        enum PlayAreaMode {
            /** Play area mode not set or not available. */
            XR_PLAY_AREA_UNKNOWN = 0,
            
            /** Play area only supports orientation tracking, no positional tracking, area will center around player. */
            XR_PLAY_AREA_3DOF = 1,
            
            /** Player is in seated position, limited positional tracking, fixed guardian around player. */
            XR_PLAY_AREA_SITTING = 2,
            
            /** Player is free to move around, full positional tracking. */
            XR_PLAY_AREA_ROOMSCALE = 3,
            
            /** Same as [constant XR_PLAY_AREA_ROOMSCALE] but origin point is fixed to the center of the physical space. In this mode, system-level recentering may be disabled, requiring the use of [method XRServer.center_on_hmd]. */
            XR_PLAY_AREA_STAGE = 4,
        }
        enum EnvironmentBlendMode {
            /** Opaque blend mode. This is typically used for VR devices. */
            XR_ENV_BLEND_MODE_OPAQUE = 0,
            
            /** Additive blend mode. This is typically used for AR devices or VR devices with passthrough. */
            XR_ENV_BLEND_MODE_ADDITIVE = 1,
            
            /** Alpha blend mode. This is typically used for AR or VR devices with passthrough capabilities. The alpha channel controls how much of the passthrough is visible. Alpha of 0.0 means the passthrough is visible and this pixel works in ADDITIVE mode. Alpha of 1.0 means that the passthrough is not visible and this pixel works in OPAQUE mode. */
            XR_ENV_BLEND_MODE_ALPHA_BLEND = 2,
        }
    }
    /** Base class for an XR interface implementation.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrinterface.html  
     */
    class XRInterface extends RefCounted {
        constructor(identifier?: any)
        /** Returns the name of this interface (`"OpenXR"`, `"OpenVR"`, `"OpenHMD"`, `"ARKit"`, etc.). */
        get_name(): StringName
        
        /** Returns a combination of [enum Capabilities] flags providing information about the capabilities of this interface. */
        get_capabilities(): int64
        
        /** Returns `true` if this interface has been initialized. */
        is_initialized(): boolean
        
        /** Call this to initialize this interface. The first interface that is initialized is identified as the primary interface and it will be used for rendering output.  
         *  After initializing the interface you want to use you then need to enable the AR/VR mode of a viewport and rendering should commence.  
         *      
         *  **Note:** You must enable the XR mode on the main viewport for any device that uses the main output of Godot, such as for mobile VR.  
         *  If you do this for a platform that handles its own output (such as OpenVR) Godot will show just one eye without distortion on screen. Alternatively, you can add a separate viewport node to your scene and enable AR/VR on that viewport. It will be used to output to the HMD, leaving you free to do anything you like in the main window, such as using a separate camera as a spectator camera or rendering something completely different.  
         *  While currently not used, you can activate additional interfaces. You may wish to do this if you want to track controllers from other platforms. However, at this point in time only one interface can render to an HMD.  
         */
        initialize(): boolean
        
        /** Turns the interface off. */
        uninitialize(): void
        
        /** Returns a [Dictionary] with extra system info. Interfaces are expected to return `XRRuntimeName` and `XRRuntimeVersion` providing info about the used XR runtime. Additional entries may be provided specific to an interface.  
         *      
         *  **Note:**This information may only be available after [method initialize] was successfully called.  
         */
        get_system_info(): GDictionary
        
        /** If supported, returns the status of our tracking. This will allow you to provide feedback to the user whether there are issues with positional tracking. */
        get_tracking_status(): XRInterface.TrackingStatus
        
        /** Returns the resolution at which we should render our intermediate results before things like lens distortion are applied by the VR platform. */
        get_render_target_size(): Vector2
        
        /** Returns the number of views that need to be rendered for this device. 1 for Monoscopic, 2 for Stereoscopic. */
        get_view_count(): int64
        
        /** Triggers a haptic pulse on a device associated with this interface.  
         *  [param action_name] is the name of the action for this pulse.  
         *  [param tracker_name] is optional and can be used to direct the pulse to a specific device provided that device is bound to this haptic.  
         *  [param frequency] is the frequency of the pulse, set to `0.0` to have the system use a default frequency.  
         *  [param amplitude] is the amplitude of the pulse between `0.0` and `1.0`.  
         *  [param duration_sec] is the duration of the pulse in seconds.  
         *  [param delay_sec] is a delay in seconds before the pulse is given.  
         */
        trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: float64, amplitude: float64, duration_sec: float64, delay_sec: float64): void
        
        /** Call this to find out if a given play area mode is supported by this interface. */
        supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns an array of vectors that represent the physical play area mapped to the virtual space around the [XROrigin3D] point. The points form a convex polygon that can be used to react to or visualize the play area. This returns an empty array if this feature is not supported or if the information is not yet available. */
        get_play_area(): PackedVector3Array
        
        /** If this is an AR interface that requires displaying a camera feed as the background, this method returns the feed ID in the [CameraServer] for this interface. */
        get_camera_feed_id(): int64
        
        /** Returns `true` if this interface supports passthrough. */
        is_passthrough_supported(): boolean
        
        /** Returns `true` if passthrough is enabled. */
        is_passthrough_enabled(): boolean
        
        /** Starts passthrough, will return `false` if passthrough couldn't be started.  
         *      
         *  **Note:** The viewport used for XR must have a transparent background, otherwise passthrough may not properly render.  
         */
        start_passthrough(): boolean
        
        /** Stops passthrough. */
        stop_passthrough(): void
        
        /** Returns the transform for a view/eye.  
         *  [param view] is the view/eye index.  
         *  [param cam_transform] is the transform that maps device coordinates to scene coordinates, typically the [member Node3D.global_transform] of the current XROrigin3D.  
         */
        get_transform_for_view(view: int64, cam_transform: Transform3D): Transform3D
        
        /** Returns the projection matrix for a view/eye. */
        get_projection_for_view(view: int64, aspect: float64, near: float64, far: float64): Projection
        
        /** Returns the an array of supported environment blend modes, see [enum XRInterface.EnvironmentBlendMode]. */
        get_supported_environment_blend_modes(): GArray
        
        /** `true` if this is the primary interface. */
        get interface_is_primary(): boolean
        set interface_is_primary(value: boolean)
        
        /** The play area mode for this interface. */
        get xr_play_area_mode(): int64
        set xr_play_area_mode(value: int64)
        
        /** Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
        get environment_blend_mode(): int64
        set environment_blend_mode(value: int64)
        
        /** On an AR interface, `true` if anchor detection is enabled. */
        get ar_is_anchor_detection_enabled(): boolean
        set ar_is_anchor_detection_enabled(value: boolean)
        
        /** Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation. */
        readonly play_area_changed: Signal<(mode: int64) => void>
    }
    /** Base class for XR interface extensions (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrinterfaceextension.html  
     */
    class XRInterfaceExtension extends XRInterface {
        constructor(identifier?: any)
        /** Returns the name of this interface. */
        /* gdvirtual */ _get_name(): StringName
        
        /** Returns the capabilities of this interface. */
        /* gdvirtual */ _get_capabilities(): int64
        
        /** Returns `true` if this interface has been initialized. */
        /* gdvirtual */ _is_initialized(): boolean
        
        /** Initializes the interface, returns `true` on success. */
        /* gdvirtual */ _initialize(): boolean
        
        /** Uninitialize the interface. */
        /* gdvirtual */ _uninitialize(): void
        
        /** Returns a [Dictionary] with system information related to this interface. */
        /* gdvirtual */ _get_system_info(): GDictionary
        
        /** Returns `true` if this interface supports this play area mode. */
        /* gdvirtual */ _supports_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns the play area mode that sets up our play area. */
        /* gdvirtual */ _get_play_area_mode(): XRInterface.PlayAreaMode
        
        /** Set the play area mode for this interface. */
        /* gdvirtual */ _set_play_area_mode(mode: XRInterface.PlayAreaMode): boolean
        
        /** Returns a [PackedVector3Array] that represents the play areas boundaries (if applicable). */
        /* gdvirtual */ _get_play_area(): PackedVector3Array
        
        /** Returns the size of our render target for this interface, this overrides the size of the [Viewport] marked as the xr viewport. */
        /* gdvirtual */ _get_render_target_size(): Vector2
        
        /** Returns the number of views this interface requires, 1 for mono, 2 for stereoscopic. */
        /* gdvirtual */ _get_view_count(): int64
        
        /** Returns the [Transform3D] that positions the [XRCamera3D] in the world. */
        /* gdvirtual */ _get_camera_transform(): Transform3D
        
        /** Returns a [Transform3D] for a given view. */
        /* gdvirtual */ _get_transform_for_view(view: int64, cam_transform: Transform3D): Transform3D
        
        /** Returns the projection matrix for the given view as a [PackedFloat64Array]. */
        /* gdvirtual */ _get_projection_for_view(view: int64, aspect: float64, z_near: float64, z_far: float64): PackedFloat64Array
        /* gdvirtual */ _get_vrs_texture(): RID
        
        /** Called if this [XRInterfaceExtension] is active before our physics and game process is called. Most XR interfaces will update its [XRPositionalTracker]s at this point in time. */
        /* gdvirtual */ _process(): void
        
        /** Called if this [XRInterfaceExtension] is active before rendering starts. Most XR interfaces will sync tracking at this point in time. */
        /* gdvirtual */ _pre_render(): void
        
        /** Called if this is our primary [XRInterfaceExtension] before we start processing a [Viewport] for every active XR [Viewport], returns `true` if that viewport should be rendered. An XR interface may return `false` if the user has taken off their headset and we can pause rendering. */
        /* gdvirtual */ _pre_draw_viewport(render_target: RID): boolean
        
        /** Called after the XR [Viewport] draw logic has completed. */
        /* gdvirtual */ _post_draw_viewport(render_target: RID, screen_rect: Rect2): void
        
        /** Called if interface is active and queues have been submitted. */
        /* gdvirtual */ _end_frame(): void
        
        /** Returns a [PackedStringArray] with tracker names configured by this interface. Note that user configuration can override this list. */
        /* gdvirtual */ _get_suggested_tracker_names(): PackedStringArray
        
        /** Returns a [PackedStringArray] with pose names configured by this interface. Note that user configuration can override this list. */
        /* gdvirtual */ _get_suggested_pose_names(tracker_name: StringName): PackedStringArray
        
        /** Returns a [enum XRInterface.TrackingStatus] specifying the current status of our tracking. */
        /* gdvirtual */ _get_tracking_status(): XRInterface.TrackingStatus
        
        /** Triggers a haptic pulse to be emitted on the specified tracker. */
        /* gdvirtual */ _trigger_haptic_pulse(action_name: string, tracker_name: StringName, frequency: float64, amplitude: float64, duration_sec: float64, delay_sec: float64): void
        
        /** Return `true` if anchor detection is enabled for this interface. */
        /* gdvirtual */ _get_anchor_detection_is_enabled(): boolean
        
        /** Enables anchor detection on this interface if supported. */
        /* gdvirtual */ _set_anchor_detection_is_enabled(enabled: boolean): void
        
        /** Returns the camera feed ID for the [CameraFeed] registered with the [CameraServer] that should be presented as the background on an AR capable device (if applicable). */
        /* gdvirtual */ _get_camera_feed_id(): int64
        
        /** Return color texture into which to render (if applicable). */
        /* gdvirtual */ _get_color_texture(): RID
        
        /** Return depth texture into which to render (if applicable). */
        /* gdvirtual */ _get_depth_texture(): RID
        
        /** Return velocity texture into which to render (if applicable). */
        /* gdvirtual */ _get_velocity_texture(): RID
        get_color_texture(): RID
        get_depth_texture(): RID
        get_velocity_texture(): RID
        
        /** Blits our render results to screen optionally applying lens distortion. This can only be called while processing `_commit_views`. */
        add_blit(render_target: RID, src_rect: Rect2, dst_rect: Rect2i, use_layer: boolean, layer: int64, apply_lens_distortion: boolean, eye_center: Vector2, k1: float64, k2: float64, upscale: float64, aspect_ratio: float64): void
        
        /** Returns a valid [RID] for a texture to which we should render the current frame if supported by the interface. */
        get_render_target_texture(render_target: RID): RID
    }
    /** A 3D node that has its position automatically updated by the [XRServer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrnode3d.html  
     */
    class XRNode3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** Returns `true` if the [member tracker] has been registered and the [member pose] is being tracked. */
        get_is_active(): boolean
        
        /** Returns `true` if the [member tracker] has current tracking data for the [member pose] being tracked. */
        get_has_tracking_data(): boolean
        
        /** Returns the [XRPose] containing the current state of the pose being tracked. This gives access to additional properties of this pose. */
        get_pose(): null | XRPose
        
        /** Triggers a haptic pulse on a device associated with this interface.  
         *  [param action_name] is the name of the action for this pulse.  
         *  [param frequency] is the frequency of the pulse, set to `0.0` to have the system use a default frequency.  
         *  [param amplitude] is the amplitude of the pulse between `0.0` and `1.0`.  
         *  [param duration_sec] is the duration of the pulse in seconds.  
         *  [param delay_sec] is a delay in seconds before the pulse is given.  
         */
        trigger_haptic_pulse(action_name: string, frequency: float64, amplitude: float64, duration_sec: float64, delay_sec: float64): void
        
        /** The name of the tracker we're bound to. Which trackers are available is not known during design time.  
         *  Godot defines a number of standard trackers such as `left_hand` and `right_hand` but others may be configured within a given [XRInterface].  
         */
        get tracker(): string
        set tracker(value: string)
        
        /** The name of the pose we're bound to. Which poses a tracker supports is not known during design time.  
         *  Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [XRInterface].  
         */
        get pose(): string
        set pose(value: string)
        
        /** Enables showing the node when tracking starts, and hiding the node when tracking is lost. */
        get show_when_tracked(): boolean
        set show_when_tracked(value: boolean)
        
        /** Emitted when the [member tracker] starts or stops receiving updated tracking data for the [member pose] being tracked. The [param tracking] argument indicates whether the tracker is getting updated tracking data. */
        readonly tracking_changed: Signal<(tracking: boolean) => void>
    }
    /** The origin point in AR/VR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrorigin3d.html  
     */
    class XROrigin3D<Map extends NodePathMap = any> extends Node3D<Map> {
        constructor(identifier?: any)
        /** The scale of the game world compared to the real world. This is the same as [member XRServer.world_scale]. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        get world_scale(): float64
        set world_scale(value: float64)
        
        /** If `true`, this origin node is currently being used by the [XRServer]. Only one origin point can be used at a time. */
        get current(): boolean
        set current(value: boolean)
    }
    namespace XRPose {
        enum TrackingConfidence {
            /** No tracking information is available for this pose. */
            XR_TRACKING_CONFIDENCE_NONE = 0,
            
            /** Tracking information may be inaccurate or estimated. For example, with inside out tracking this would indicate a controller may be (partially) obscured. */
            XR_TRACKING_CONFIDENCE_LOW = 1,
            
            /** Tracking information is considered accurate and up to date. */
            XR_TRACKING_CONFIDENCE_HIGH = 2,
        }
    }
    /** This object contains all data related to a pose on a tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrpose.html  
     */
    class XRPose extends RefCounted {
        constructor(identifier?: any)
        set_name(name: StringName): void
        get_name(): StringName
        
        /** Returns the [member transform] with world scale and our reference frame applied. This is the transform used to position [XRNode3D] objects. */
        get_adjusted_transform(): Transform3D
        
        /** If `true` our tracking data is up to date. If `false` we're no longer receiving new tracking data and our state is whatever that last valid state was. */
        get has_tracking_data(): boolean
        set has_tracking_data(value: boolean)
        
        /** The transform containing the original and transform as reported by the XR runtime. */
        get transform(): string
        set transform(value: string)
        
        /** The linear velocity of this pose. */
        get linear_velocity(): string
        set linear_velocity(value: string)
        
        /** The angular velocity for this pose. */
        get angular_velocity(): string
        set angular_velocity(value: string)
        
        /** The tracking confidence for this pose, provides insight on how accurate the spatial positioning of this record is. */
        get tracking_confidence(): int64
        set tracking_confidence(value: int64)
    }
    namespace XRPositionalTracker {
        enum TrackerHand {
            /** The hand this tracker is held in is unknown or not applicable. */
            TRACKER_HAND_UNKNOWN = 0,
            
            /** This tracker is the left hand controller. */
            TRACKER_HAND_LEFT = 1,
            
            /** This tracker is the right hand controller. */
            TRACKER_HAND_RIGHT = 2,
            
            /** Represents the size of the [enum TrackerHand] enum. */
            TRACKER_HAND_MAX = 3,
        }
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrpositionaltracker.html  
     */
    class XRPositionalTracker extends XRTracker {
        constructor(identifier?: any)
        /** Returns `true` if the tracker is available and is currently tracking the bound [param name] pose. */
        has_pose(name: StringName): boolean
        
        /** Returns the current [XRPose] state object for the bound [param name] pose. */
        get_pose(name: StringName): null | XRPose
        
        /** Marks this pose as invalid, we don't clear the last reported state but it allows users to decide if trackers need to be hidden if we lose tracking or just remain at their last known position. */
        invalidate_pose(name: StringName): void
        
        /** Sets the transform, linear velocity, angular velocity and tracking confidence for the given pose. This method is called by a [XRInterface] implementation and should not be used directly. */
        set_pose(name: StringName, transform: Transform3D, linear_velocity: Vector3, angular_velocity: Vector3, tracking_confidence: XRPose.TrackingConfidence): void
        
        /** Returns an input for this tracker. It can return a boolean, float or [Vector2] value depending on whether the input is a button, trigger or thumbstick/thumbpad. */
        get_input(name: StringName): any
        
        /** Changes the value for the given input. This method is called by a [XRInterface] implementation and should not be used directly. */
        set_input(name: StringName, value: any): void
        
        /** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
        get profile(): string
        set profile(value: string)
        
        /** Defines which hand this tracker relates to. */
        get hand(): int64
        set hand(value: int64)
        
        /** Emitted when the state of a pose tracked by this tracker changes. */
        readonly pose_changed: Signal<(pose: XRPose) => void>
        
        /** Emitted when a pose tracked by this tracker stops getting updated tracking data. */
        readonly pose_lost_tracking: Signal<(pose: XRPose) => void>
        
        /** Emitted when a button on this tracker is pressed. Note that many XR runtimes allow other inputs to be mapped to buttons. */
        readonly button_pressed: Signal<(name: string) => void>
        
        /** Emitted when a button on this tracker is released. */
        readonly button_released: Signal<(name: string) => void>
        
        /** Emitted when a trigger or similar input on this tracker changes value. */
        readonly input_float_changed: Signal<(name: string, value: float64) => void>
        
        /** Emitted when a thumbstick or thumbpad on this tracker moves. */
        readonly input_vector2_changed: Signal<(name: string, vector: Vector2) => void>
        
        /** Emitted when the profile of our tracker changes. */
        readonly profile_changed: Signal<(role: string) => void>
    }
    /** A tracked object.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrtracker.html  
     */
    class XRTracker extends RefCounted {
        constructor(identifier?: any)
        get_tracker_name(): StringName
        set_tracker_name(name: StringName): void
        
        /** The type of tracker. */
        get type(): int64
        set type(value: int64)
        
        /** The description of this tracker. */
        get description(): string
        set description(value: string)
    }
    /** Helper class for XR interfaces that generates VRS images.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_xrvrs.html  
     */
    class XRVRS extends Object {
        constructor(identifier?: any)
        /** Generates the VRS texture based on a render [param target_size] adjusted by our VRS tile size. For each eyes focal point passed in [param eye_foci] a layer is created. Focal point should be in NDC.  
         *  The result will be cached, requesting a VRS texture with unchanged parameters and settings will return the cached RID.  
         */
        make_vrs_texture(target_size: Vector2, eye_foci: PackedVector2Array | Vector2[]): RID
        
        /** The minimum radius around the focal point where full quality is guaranteed if VRS is used as a percentage of screen size. */
        get vrs_min_radius(): float64
        set vrs_min_radius(value: float64)
        
        /** The strength used to calculate the VRS density map. The greater this value, the more noticeable VRS is. */
        get vrs_strength(): float64
        set vrs_strength(value: float64)
        
        /** The render region that the VRS texture will be scaled to when generated. */
        get vrs_render_region(): Rect2i
        set vrs_render_region(value: Rect2i)
    }
    namespace ZIPPacker {
        enum ZipAppend {
            /** Create a new zip archive at the given path. */
            APPEND_CREATE = 0,
            
            /** Append a new zip archive to the end of the already existing file at the given path. */
            APPEND_CREATEAFTER = 1,
            
            /** Add new files to the existing zip archive at the given path. */
            APPEND_ADDINZIP = 2,
        }
    }
    /** Allows the creation of ZIP files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_zippacker.html  
     */
    class ZIPPacker extends RefCounted {
        constructor(identifier?: any)
        /** Opens a zip file for writing at the given path using the specified write mode.  
         *  This must be called before everything else.  
         */
        open(path: string, append?: ZIPPacker.ZipAppend /* = 0 */): Error
        
        /** Starts writing to a file within the archive. Only one file can be written at the same time.  
         *  Must be called after [method open].  
         */
        start_file(path: string): Error
        
        /** Write the given [param data] to the file.  
         *  Needs to be called after [method start_file].  
         */
        write_file(data: PackedByteArray | byte[] | ArrayBuffer): Error
        
        /** Stops writing to a file within the archive.  
         *  It will fail if there is no open file.  
         */
        close_file(): Error
        
        /** Closes the underlying resources used by this instance. */
        close(): Error
    }
    /** Allows reading the content of a ZIP file.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_zipreader.html  
     */
    class ZIPReader extends RefCounted {
        constructor(identifier?: any)
        /** Opens the zip archive at the given [param path] and reads its file index. */
        open(path: string): Error
        
        /** Closes the underlying resources used by this instance. */
        close(): Error
        
        /** Returns the list of names of all files in the loaded archive.  
         *  Must be called after [method open].  
         */
        get_files(): PackedStringArray
        
        /** Loads the whole content of a file in the loaded zip archive into memory and returns it.  
         *  Must be called after [method open].  
         */
        read_file(path: string, case_sensitive?: boolean /* = true */): PackedByteArray
        
        /** Returns `true` if the file exists in the loaded zip archive.  
         *  Must be called after [method open].  
         */
        file_exists(path: string, case_sensitive?: boolean /* = true */): boolean
    }
    namespace Vector2 {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
        }
    }
    /** A 2D vector using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vector2.html  
     */
    class Vector2 {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector2
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector2
        
        /** Infinity vector, a vector with all components set to [constant @GDScript.INF]. */
        static readonly INF: Vector2
        
        /** Left unit vector. Represents the direction of left. */
        static readonly LEFT: Vector2
        
        /** Right unit vector. Represents the direction of right. */
        static readonly RIGHT: Vector2
        
        /** Up unit vector. Y is down in 2D, so this vector points -Y. */
        static readonly UP: Vector2
        
        /** Down unit vector. Y is down in 2D, so this vector points +Y. */
        static readonly DOWN: Vector2
        constructor()
        constructor(from: Vector2)
        constructor(from: Vector2i)
        constructor(x: float64, y: float64)
        
        /** Returns this vector's angle with respect to the positive X axis, or `(1, 0)` vector, in radians.  
         *  For example, `Vector2.RIGHT.angle()` will return zero, `Vector2.DOWN.angle()` will return `PI / 2` (a quarter turn, or 90 degrees), and `Vector2(1, -1).angle()` will return `-PI / 4` (a negative eighth turn, or -45 degrees).  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle.png]Illustration of the returned angle.[/url]  
         *  Equivalent to the result of [method @GlobalScope.atan2] when called with the vector's [member y] and [member x] as parameters: `atan2(y, x)`.  
         */
        angle(): float64
        
        /** Returns the signed angle to the given vector, in radians.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to.png]Illustration of the returned angle.[/url]  
         */
        angle_to(to: Vector2): float64
        
        /** Returns the angle between the line connecting the two points and the X axis, in radians.  
         *  `a.angle_to_point(b)` is equivalent of doing `(b - a).angle()`.  
         *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/master/img/vector2_angle_to_point.png]Illustration of the returned angle.[/url]  
         */
        angle_to_point(to: Vector2): float64
        
        /** Returns the normalized vector pointing from this vector to [param to]. This is equivalent to using `(b - a).normalized()`. */
        direction_to(to: Vector2): Vector2
        
        /** Returns the distance between this vector and [param to]. */
        distance_to(to: Vector2): float64
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distance_squared_to(to: Vector2): float64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): float64
        
        /** Returns the vector with a maximum length by limiting its length to [param length]. If the vector is non-finite, the result is undefined. */
        limit_length(length?: float64 /* = 1 */): Vector2
        
        /** Returns the result of scaling the vector to unit length. Equivalent to `v / v.length()`. Returns `(0, 0)` if `v.length() == 0`. See also [method is_normalized].  
         *      
         *  **Note:** This function may return incorrect values if the input vector length is near zero.  
         */
        normalized(): Vector2
        
        /** Returns `true` if the vector is normalized, i.e. its length is approximately equal to 1. */
        is_normalized(): boolean
        
        /** Returns `true` if this vector and [param to] are approximately equal, by running [method @GlobalScope.is_equal_approx] on each component. */
        is_equal_approx(to: Vector2): boolean
        
        /** Returns `true` if this vector's values are approximately zero, by running [method @GlobalScope.is_zero_approx] on each component.  
         *  This method is faster than using [method is_equal_approx] with one value as a zero vector.  
         */
        is_zero_approx(): boolean
        
        /** Returns `true` if this vector is finite, by calling [method @GlobalScope.is_finite] on each component. */
        is_finite(): boolean
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param mod]. */
        posmod(mod: float64): Vector2
        
        /** Returns a vector composed of the [method @GlobalScope.fposmod] of this vector's components and [param modv]'s components. */
        posmodv(modv: Vector2): Vector2
        
        /** Returns a new vector resulting from projecting this vector onto the given vector [param b]. The resulting new vector is parallel to [param b]. See also [method slide].  
         *      
         *  **Note:** If the vector [param b] is a zero vector, the components of the resulting new vector will be [constant @GDScript.NAN].  
         */
        project(b: Vector2): Vector2
        
        /** Returns the result of the linear interpolation between this vector and [param to] by amount [param weight]. [param weight] is on the range of `0.0` to `1.0`, representing the amount of interpolation. */
        lerp(to: Vector2, weight: float64): Vector2
        
        /** Returns the result of spherical linear interpolation between this vector and [param to], by amount [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  This method also handles interpolating the lengths if the input vectors have different lengths. For the special case of one or both input vectors having zero length, this method behaves like [method lerp].  
         */
        slerp(to: Vector2, weight: float64): Vector2
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation. */
        cubic_interpolate(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: float64): Vector2
        
        /** Performs a cubic interpolation between this vector and [param b] using [param pre_a] and [param post_b] as handles, and returns the result at position [param weight]. [param weight] is on the range of 0.0 to 1.0, representing the amount of interpolation.  
         *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
         */
        cubic_interpolate_in_time(b: Vector2, pre_a: Vector2, post_b: Vector2, weight: float64, b_t: float64, pre_a_t: float64, post_b_t: float64): Vector2
        
        /** Returns the point at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezier_interpolate(control_1: Vector2, control_2: Vector2, end: Vector2, t: float64): Vector2
        
        /** Returns the derivative at the given [param t] on the [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by this vector and the given [param control_1], [param control_2], and [param end] points. */
        bezier_derivative(control_1: Vector2, control_2: Vector2, end: Vector2, t: float64): Vector2
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): int64
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Y]. */
        min_axis_index(): int64
        
        /** Returns a new vector moved toward [param to] by the fixed [param delta] amount. Will not go past the final value. */
        move_toward(to: Vector2, delta: float64): Vector2
        
        /** Returns the result of rotating this vector by [param angle] (in radians). See also [method @GlobalScope.deg_to_rad]. */
        rotated(angle: float64): Vector2
        
        /** Returns a perpendicular vector rotated 90 degrees counter-clockwise compared to the original, with the same length. */
        orthogonal(): Vector2
        
        /** Returns a new vector with all components rounded down (towards negative infinity). */
        floor(): Vector2
        
        /** Returns a new vector with all components rounded up (towards positive infinity). */
        ceil(): Vector2
        
        /** Returns a new vector with all components rounded to the nearest integer, with halfway cases rounded away from zero. */
        round(): Vector2
        
        /** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
        aspect(): float64
        
        /** Returns the dot product of this vector and [param with]. This can be used to compare the angle between two vectors. For example, this can be used to determine whether an enemy is facing the player.  
         *  The dot product will be `0` for a right angle (90 degrees), greater than 0 for angles narrower than 90 degrees and lower than 0 for angles wider than 90 degrees.  
         *  When using unit (normalized) vectors, the result will always be between `-1.0` (180 degree angle) when the vectors are facing opposite directions, and `1.0` (0 degree angle) when the vectors are aligned.  
         *      
         *  **Note:** `a.dot(b)` is equivalent to `b.dot(a)`.  
         */
        dot(with_: Vector2): float64
        
        /** Returns a new vector resulting from sliding this vector along a line with normal [param n]. The resulting new vector is perpendicular to [param n], and is equivalent to this vector minus its projection on [param n]. See also [method project].  
         *      
         *  **Note:** The vector [param n] must be normalized. See also [method normalized].  
         */
        slide(n: Vector2): Vector2
        
        /** Returns the vector "bounced off" from a line defined by the given normal [param n] perpendicular to the line.  
         *      
         *  **Note:** [method bounce] performs the operation that most engines and frameworks call [code skip-lint]reflect()`.  
         */
        bounce(n: Vector2): Vector2
        
        /** Returns the result of reflecting the vector from a line defined by the given direction vector [param line].  
         *      
         *  **Note:** [method reflect] differs from what other engines and frameworks call [code skip-lint]reflect()`. In other engines, [code skip-lint]reflect()` takes a normal direction which is a direction perpendicular to the line. In Godot, you specify the direction of the line directly. See also [method bounce] which does what most engines call [code skip-lint]reflect()`.  
         */
        reflect(line: Vector2): Vector2
        
        /** Returns the 2D analog of the cross product for this vector and [param with].  
         *  This is the signed area of the parallelogram formed by the two vectors. If the second vector is clockwise from the first vector, then the cross product is the positive area. If counter-clockwise, the cross product is the negative area. If the two vectors are parallel this returns zero, making it useful for testing if two vectors are parallel.  
         *      
         *  **Note:** Cross product is not defined in 2D mathematically. This method embeds the 2D vectors in the XY plane of 3D space and uses their cross product's Z component as the analog.  
         */
        cross(with_: Vector2): float64
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector2
        
        /** Returns a new vector with each component set to `1.0` if it's positive, `-1.0` if it's negative, and `0.0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector2
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector2, max: Vector2): Vector2
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampf(min: float64, max: float64): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of the corresponding component in [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snapped(step: Vector2): Vector2
        
        /** Returns a new vector with each component snapped to the nearest multiple of [param step]. This can also be used to round the components to an arbitrary number of decimals. */
        snappedf(step: float64): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2(minf(x, with.x), minf(y, with.y))`. */
        min(with_: Vector2): Vector2
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2(minf(x, with), minf(y, with))`. */
        minf(with_: float64): Vector2
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2(maxf(x, with.x), maxf(y, with.y))`. */
        max(with_: Vector2): Vector2
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2(maxf(x, with), maxf(y, with))`. */
        maxf(with_: float64): Vector2
        
        /** Creates a unit [Vector2] rotated to the given [param angle] in radians. This is equivalent to doing `Vector2(cos(angle), sin(angle))` or `Vector2.RIGHT.rotated(angle)`.  
         *    
         */
        static from_angle(angle: float64): Vector2
        static ADD(left: Vector2, right: Vector2): Vector2
        static SUBTRACT(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: float64, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: Vector2): Vector2
        static MULTIPLY(left: Vector2, right: float64): Vector2
        static DIVIDE(left: Vector2, right: Vector2): Vector2
        static DIVIDE(left: Vector2, right: float64): Vector2
        static NEGATE(left: Vector2): Vector2
        static EQUAL(left: Vector2, right: Vector2): boolean
        static NOT_EQUAL(left: Vector2, right: Vector2): boolean
        static LESS(left: Vector2, right: Vector2): boolean
        static LESS_EQUAL(left: Vector2, right: Vector2): boolean
        static GREATER(left: Vector2, right: Vector2): boolean
        static GREATER_EQUAL(left: Vector2, right: Vector2): boolean
        get x(): float64
        set x(value: float64)
        get y(): float64
        set y(value: float64)
    }
    namespace Vector2i {
        enum Axis {
            /** Enumerated value for the X axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_X = 0,
            
            /** Enumerated value for the Y axis. Returned by [method max_axis_index] and [method min_axis_index]. */
            AXIS_Y = 1,
        }
    }
    /** A 2D vector using integer coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_vector2i.html  
     */
    class Vector2i {
        /** Zero vector, a vector with all components set to `0`. */
        static readonly ZERO: Vector2i
        
        /** One vector, a vector with all components set to `1`. */
        static readonly ONE: Vector2i
        
        /** Min vector, a vector with all components equal to `INT32_MIN`. Can be used as a negative integer equivalent of [constant Vector2.INF]. */
        static readonly MIN: Vector2i
        
        /** Max vector, a vector with all components equal to `INT32_MAX`. Can be used as an integer equivalent of [constant Vector2.INF]. */
        static readonly MAX: Vector2i
        
        /** Left unit vector. Represents the direction of left. */
        static readonly LEFT: Vector2i
        
        /** Right unit vector. Represents the direction of right. */
        static readonly RIGHT: Vector2i
        
        /** Up unit vector. Y is down in 2D, so this vector points -Y. */
        static readonly UP: Vector2i
        
        /** Down unit vector. Y is down in 2D, so this vector points +Y. */
        static readonly DOWN: Vector2i
        constructor()
        constructor(from: Vector2i)
        constructor(from: Vector2)
        constructor(x: int64, y: int64)
        
        /** Returns the aspect ratio of this vector, the ratio of [member x] to [member y]. */
        aspect(): float64
        
        /** Returns the axis of the vector's highest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_X]. */
        max_axis_index(): int64
        
        /** Returns the axis of the vector's lowest value. See `AXIS_*` constants. If all components are equal, this method returns [constant AXIS_Y]. */
        min_axis_index(): int64
        
        /** Returns the distance between this vector and [param to]. */
        distance_to(to: Vector2i): float64
        
        /** Returns the squared distance between this vector and [param to].  
         *  This method runs faster than [method distance_to], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        distance_squared_to(to: Vector2i): int64
        
        /** Returns the length (magnitude) of this vector. */
        length(): float64
        
        /** Returns the squared length (squared magnitude) of this vector.  
         *  This method runs faster than [method length], so prefer it if you need to compare vectors or need the squared distance for some formula.  
         */
        length_squared(): int64
        
        /** Returns a new vector with each component set to `1` if it's positive, `-1` if it's negative, and `0` if it's zero. The result is identical to calling [method @GlobalScope.sign] on each component. */
        sign(): Vector2i
        
        /** Returns a new vector with all components in absolute values (i.e. positive). */
        abs(): Vector2i
        
        /** Returns a new vector with all components clamped between the components of [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clamp(min: Vector2i, max: Vector2i): Vector2i
        
        /** Returns a new vector with all components clamped between [param min] and [param max], by running [method @GlobalScope.clamp] on each component. */
        clampi(min: int64, max: int64): Vector2i
        
        /** Returns a new vector with each component snapped to the closest multiple of the corresponding component in [param step]. */
        snapped(step: Vector2i): Vector2i
        
        /** Returns a new vector with each component snapped to the closest multiple of [param step]. */
        snappedi(step: int64): Vector2i
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2i(mini(x, with.x), mini(y, with.y))`. */
        min(with_: Vector2i): Vector2i
        
        /** Returns the component-wise minimum of this and [param with], equivalent to `Vector2i(mini(x, with), mini(y, with))`. */
        mini(with_: int64): Vector2i
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2i(maxi(x, with.x), maxi(y, with.y))`. */
        max(with_: Vector2i): Vector2i
        
        /** Returns the component-wise maximum of this and [param with], equivalent to `Vector2i(maxi(x, with), maxi(y, with))`. */
        maxi(with_: int64): Vector2i
        static ADD(left: Vector2i, right: Vector2i): Vector2i
        static SUBTRACT(left: Vector2i, right: Vector2i): Vector2i
        static MULTIPLY(left: float64, right: Vector2i): Vector2i
        static MULTIPLY(left: Vector2i, right: Vector2i): Vector2i
        static MULTIPLY(left: Vector2i, right: float64): Vector2i
        static DIVIDE(left: Vector2i, right: Vector2i): Vector2i
        static DIVIDE(left: Vector2i, right: float64): Vector2i
        static NEGATE(left: Vector2i): Vector2i
        static EQUAL(left: Vector2i, right: Vector2i): boolean
        static NOT_EQUAL(left: Vector2i, right: Vector2i): boolean
        static LESS(left: Vector2i, right: Vector2i): boolean
        static LESS_EQUAL(left: Vector2i, right: Vector2i): boolean
        static GREATER(left: Vector2i, right: Vector2i): boolean
        static GREATER_EQUAL(left: Vector2i, right: Vector2i): boolean
        get x(): int64
        set x(value: int64)
        get y(): int64
        set y(value: int64)
    }
    /** A 2D axis-aligned bounding box using floating-point coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.4/classes/class_rect2.html  
     */
    class Rect2 {
        constructor()
        constructor(from: Rect2)
        constructor(from: Rect2i)
        constructor(position: Vector2, size: Vector2)
        constructor(x: float64, y: float64, width: float64, height: float64)
        
        /** Returns the center point of the rectangle. This is the same as `position + (size / 2.0)`. */
        get_center(): Vector2
        
        /** Returns the rectangle's area. This is equivalent to `size.x * size.y`. See also [method has_area]. */
        get_area(): float64
        
        /** Returns `true` if this rectangle has positive width and height. See also [method get_area]. */
        has_area(): boolean
        
        /** Returns `true` if the rectangle contains the given [param point]. By convention, points on the right and bottom edges are **not** included.  
         *      
         *  **Note:** This method is not reliable for [Rect2] with a  *negative*  [member size]. Use [method abs] first to get a valid rectangle.  
         */
        has_point(point: Vector2): boolean
        
        /** Returns `true` if this rectangle and [param rect] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
        is_equal_approx(rect: Rect2): boolean
        
        /** Returns `true` if this rectangle's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
        is_finite(): boolean
        
        /** Returns `true` if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded, unless [param include_borders] is `true`. */
        intersects(b: Rect2, include_borders?: boolean /* = false */): boolean
        
        /** Returns `true` if this rectangle  *completely*  encloses the [param b] rectangle. */
        encloses(b: Rect2): boolean
        
        /** Returns the intersection between this rectangle and [param b]. If the rectangles do not intersect, returns an empty [Rect2].  
         *    
         *      
         *  **Note:** If you only need to know whether two rectangles are overlapping, use [method intersects], instead.  
         */
        intersection(b: Rect2): Rect2
        
        /** Returns a [Rect2] that encloses both this rectangle and [param b] around the edges. See also [method encloses]. */
        merge(b: Rect2): Rect2
        
        /** Returns a copy of this rectangle expanded to align the edges with the given [param to] point, if necessary.  
         *    
         */
        expand(to: Vector2): Rect2
        
        /** Returns the vertex's position of this rect that's the farthest in the given direction. This point is commonly known as the support point in collision detection algorithms. */
        get_support(direction: Vector2): Vector2
        
        /** Returns a copy of this rectangle extended on all sides by the given [param amount]. A negative [param amount] shrinks the rectangle instead. See also [method grow_individual] and [method grow_side].  
         *    
         */
        grow(amount: float64): Rect2
        
        /** Returns a copy of this rectangle with its [param side] extended by the given [param amount] (see [enum Side] constants). A negative [param amount] shrinks the rectangle, instead. See also [method grow] and [method grow_individual]. */
        grow_side(side: int64, amount: float64): Rect2
        
        /** Returns a copy of this rectangle with its [param left], [param top], [param right], and [param bottom] sides extended by the given amounts. Negative values shrink the sides, instead. See also [method grow] and [method grow_side]. */
        grow_individual(left: float64, top: float64, right: float64, bottom: float64): Rect2
        
        /** Returns a [Rect2] equivalent to this rectangle, with its width and height modified to be non-negative values, and with its [member position] being the top-left corner of the rectangle.  
         *    
         *      
         *  **Note:** It's recommended to use this method when [member size] is negative, as most other methods in Godot assume that the [member position] is the top-left corner, and the [member end] is the bottom-right corner.  
         */
        abs(): Rect2
        get position(): Vector2
        set position(value: Vector2)
        get size(): Vector2
        set size(value: Vector2)
        get end(): Vector2
        set end(value: Vector2)
    }
}
