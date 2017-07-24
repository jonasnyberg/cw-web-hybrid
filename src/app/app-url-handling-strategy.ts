import {UrlHandlingStrategy} from '@angular/router';
// This URL handling strategy is custom and application-specific.
// Using it we can tell the Angular 2 router to handle only URL starting with settings.
export class Ng1Ng2UrlHandlingStrategy implements UrlHandlingStrategy {
    shouldProcessUrl(url: any) {
        console.log('url', url.toString());
        const next = url.toString();
        return next.startsWith('/hello2');
    }

    extract(url: any) {
        return url;
    }

    merge(url: any, whole: any) {
        return url;
    }
}
