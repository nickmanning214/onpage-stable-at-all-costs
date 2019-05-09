//The editor
import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';

//containers
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';

//UI
import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';

window.IncCKEditorFeatures = {
    //The editor
    InlineEditor,
    //containers
    Paragraph,
    Heading,
    //UI
    HeadingButtonsUI,
    ParagraphButtonUI
    
}
