import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    NgZorroAntdModule
  ],
  exports: [
    FormsModule,
    CommonModule,
    NgZorroAntdModule
  ],
  providers   : [ { provide: NZ_I18N, useValue: zh_CN } ]
})
export class SharedModule {}
