import { FormControl } from '@angular/forms';

export function FilledTitleValidator (formControl: FormControl) {
    if( formControl.value )
        if( formControl.value.trim() === '' ){
            return {
            validTitle: true
            };
        } 
    
    return null;
        
}