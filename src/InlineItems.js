import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview';

import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

class InlineItems extends Plugin {
    static get requires() {
        return [ Widget ];
    }
    
    _defineSchema(){

        const blockConfig = {
            allowWhere: '$block',//like blockquote
            allowContentOf: '$root',
            isObject:true,
            allowAttributes:['type']
        }

        this.editor.model.schema.register( 'inlineItem',blockConfig);

        return this;
    }
    
    _defineConverters(){
        //This doesn't work for some reason
        //TypeError: Cannot read property 'is' of undefined at Mapper._findPositionIn
        this.editor.conversion.for('upcast').elementToElement({
            view: {
                name:'section',
                classes: 'inline-item'
            },
            model: 'inlineItem'
        });

        this.editor.conversion.for('upcast').attributeToAttribute({
            view: 'data-type',
            model: 'type'
        });
        /*
        this.editor.conversion.for('dataDowncast').elementToElement({
            view: {
                name:'section',
                classes: 'inline-item'
            },
            model: 'inlineItem'
        });*/

        this.editor.conversion.for('dataDowncast').elementToElement({
            view: ( modelElement, viewWriter ) => {
                //what is a container element? These seem to be containers if you use the dev tools
                const section = viewWriter.createContainerElement( 'section', { class: 'inline-item', ['data-type']:modelElement.getAttribute('type')} );
                //return section;
                return section
            },
            model: 'inlineItem'
        });

        this.editor.conversion.for( 'editingDowncast' ).elementToElement( {
            view: ( modelElement, viewWriter ) => {
                //what is a container element? These seem to be containers if you use the dev tools
                const section = viewWriter.createContainerElement( 'section', { class: 'inline-item', ['data-type']:modelElement.getAttribute('type')} );
                //return section;
                return toWidget( section, viewWriter, { label: 'simple box widget' } );
            },
            model: 'inlineItem'
        } );

        return this;
    }

    _defineButton(){

        const editor = this.editor;
        const t = editor.t;

        // The "simpleBox" button must be registered among the UI components of the editor
        // to be displayed in the toolbar.
        editor.ui.componentFactory.add( 'inlineitem', locale => {
            // The state of the button will be bound to the widget command.
            //const command = editor.commands.get( 'insertSimpleBox' );

            // The button will be an instance of ButtonView.
            const buttonView = new ButtonView( locale );

            buttonView.set( {
                // The t() function helps localize the editor. All strings enclosed in t() can be
                // translated and change when the language of the editor changes.
                label: t( 'Inline Item' ),
                withText: true,
                tooltip: true
            } );

            // Execute the command when the button is clicked (executed).
            this.listenTo( buttonView, 'execute', editor.config.get('inlineItem').onButtonPress.bind(null,editor));

            return buttonView;
        } );
        return this;
    }
    init() {
        
        this._defineSchema()._defineConverters()._defineButton();

    }
}

export default InlineItems;
