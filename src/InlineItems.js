import Plugin from '@ckeditor/ckeditor5-core/src/plugin';
import { toWidget } from '@ckeditor/ckeditor5-widget/src/utils';
import Widget from '@ckeditor/ckeditor5-widget/src/widget';

class InlineItems extends Plugin {
    static get requires() {
        return [ Widget ];
    }
    registerSchema(){

        const blockConfig = {
            allowWhere: '$block',//like blockquote
            allowContentOf: '$root',
            isObject:true
        }

        this.editor.model.schema.register( 'inlineItem',blockConfig);
        
        return this;
    }

    elementToElement(){
        this.editor.conversion.elementToElement( {
            model: 'inlineItem',
            view: {
                name: 'div',
                classes: 'inline-item'
            }

        } );
    }

    
    upcast(){
        //This doesn't work for some reason
        //TypeError: Cannot read property 'is' of undefined at Mapper._findPositionIn
        this.editor.conversion.for('upcast').elementToElement({
            view: {
                name:'section',
                classes: 'inline-item'
            },
            model: 'inlineItem'
        });

        this.editor.conversion.for('dataDowncast').elementToElement({
            view: {
                name:'section',
                classes: 'inline-item'
            },
            model: 'inlineItem'
        });

        this.editor.conversion.for( 'editingDowncast' ).elementToElement( {
            view: ( modelElement, viewWriter ) => {
                //what is a container element? These seem to be containers if you use the dev tools
                const section = viewWriter.createContainerElement( 'section', { class: 'inline-item' } );
                //return section;
                return toWidget( section, viewWriter, { label: 'simple box widget' } );
            },
            model: 'inlineItem'
        } );

        return this;
    }

    init() {
        
        this.registerSchema();
        //this.elementToElement();
        this.upcast();
        

    }
}

export default InlineItems;
