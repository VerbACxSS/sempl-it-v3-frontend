import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import * as echarts from 'echarts/core';
import {routes} from './app.routes';
import {provideDesignAngularKit} from 'design-angular-kit';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideAnimations} from '@angular/platform-browser/animations';
import {backendInterceptor} from './interceptor';
import {provideEchartsCore} from 'ngx-echarts';


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([backendInterceptor])),
    provideDesignAngularKit(),
    provideEchartsCore({echarts}),
  ]
};
