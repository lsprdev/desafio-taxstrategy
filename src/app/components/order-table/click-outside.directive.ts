import {
    Directive,
    ElementRef,
    EventEmitter,
    HostListener,
    Output
} from '@angular/core';

@Directive({
    selector: '[appClickOutside]',
    standalone: true,
})
export class ClickOutsideDirective {

    @Output()
    appClickOutside: EventEmitter<void> = new EventEmitter();

    @HostListener('document:click', ['$event'])
    onDocumentClick(event: PointerEvent) {
        const nativeElement: any = this.elementRef.nativeElement;
        const clickedInside: boolean = nativeElement.contains(event.target);
        if (!clickedInside) {
            this.appClickOutside.emit();
        }
    }

    constructor(private elementRef: ElementRef) { }

}