import { Directive, ElementRef, input } from "@angular/core";

@Directive({
    selector: 'a[appSafeLink]',
    standalone: true,
    host: {
        '(click)': 'onConfirmLeavePage($event)',
    }
})
export class SafeLinkDirective {
    queryParam = input('myapp', {alias: 'appSafeLink'});

    constructor(private hostElementRef: ElementRef<HTMLAnchorElement>) {}

    onConfirmLeavePage(event: MouseEvent) {
        const wantsToLeave = window.confirm('Do you want to leave the app?');

        if (wantsToLeave) {
            const anchor = this.hostElementRef.nativeElement;
            const address = anchor.href;

            anchor.href = address + '?from=' + this.queryParam();

            return;
        }

        event?.preventDefault();
    }
}