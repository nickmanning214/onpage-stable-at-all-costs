//The editor
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

//functionalities
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import ShiftEnter from '@ckeditor/ckeditor5-enter/src/shiftenter';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';
//import IndentTextPlugin from 'ckeditor5-indent-text/src/indent-text'

//containers
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import List from '@ckeditor/ckeditor5-list/src/list';

//attributes
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';

//UI
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';

window.IncCKEditorFeatures = {
    //The editor
    InlineEditor,
    //functionalities
    Clipboard,
    Enter,
    ShiftEnter,
    Typing,
    Undo,
    //IndentTextPlugin,
    //containers
    Paragraph,
    Heading,
    BlockQuote,
    List,
    //Attributes
    Bold,
    Italic,
    //UI
    HeadingButtonsUI,
    ParagraphButtonUI
    
}
