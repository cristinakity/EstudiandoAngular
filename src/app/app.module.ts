import { BrowserModule } from "@angular/platform-browser";
import { NgModule, Pipe } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { PropertyBindingComponent } from "./data-handled-and-events/property-binding/property-binding.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { WelcomeComponent } from "./shared/components/welcome/welcome.component";
import { AttributeBindingComponent } from "./data-handled-and-events/attribute-binding/attribute-binding.component";
import { ClassBindingComponent } from "./data-handled-and-events/class-binding/class-binding.component";
import { StyleBindingComponent } from "./data-handled-and-events/style-binding/style-binding.component";
import { EventBindingComponent } from "./data-handled-and-events/event-binding/event-binding.component";
import { EventFilteringComponent } from "./data-handled-and-events/event-filtering/event-filtering.component";
import { TemplateVariablesComponent } from "./data-handled-and-events/template-variables/template-variables.component";
import { TwoWayBindingComponent } from "./data-handled-and-events/two-way-binding/two-way-binding.component";
import { PipesComponent } from "./data-handled-and-events/pipes/pipes.component";
import { CustomPipesComponent } from "./data-handled-and-events/custom-pipes/custom-pipes.component";
import { DataHandledAndEventsComponent } from "./data-handled-and-events/data-handled-and-events.component";
import { SummaryPipe } from "./shared/pipes/summary.pipe";
import { BuildingReusableComponentsComponent } from "./building-reusable-components/building-reusable-components.component";
import { ComponentApiComponent } from './building-reusable-components/component-api/component-api.component';
import { InputPropertiesComponent } from './building-reusable-components/input-properties/input-properties.component';
import { AliasingInputPropertiesComponent } from './building-reusable-components/aliasing-input-properties/aliasing-input-properties.component';
import { OutputPropertiesComponent } from './building-reusable-components/output-properties/output-properties.component';
import { PassingEventDataComponent } from './building-reusable-components/passing-event-data/passing-event-data.component';
import { AliasingOutputPropertiesComponent } from './building-reusable-components/aliasing-output-properties/aliasing-output-properties.component';
import { TemplatesComponent } from './building-reusable-components/templates/templates.component';
import { StylesComponent } from './building-reusable-components/styles/styles.component';
import { ViewEncapsulationComponent } from './building-reusable-components/view-encapsulation/view-encapsulation.component';
import { NgContentComponent } from './building-reusable-components/ng-content/ng-content.component';
import { NgContainerComponent } from './building-reusable-components/ng-container/ng-container.component';

const appRoutes: Routes = [
  { path: "property-binding", component: PropertyBindingComponent },
  { path: "attribute-binding", component: AttributeBindingComponent },
  { path: "class-binding", component: ClassBindingComponent },
  { path: "style-binding", component: StyleBindingComponent },
  { path: "event-binding", component: EventBindingComponent },
  { path: "event-filtering", component: EventFilteringComponent },
  { path: "template-variables", component: TemplateVariablesComponent },
  { path: "two-way-binding", component: TwoWayBindingComponent },
  { path: "pipes", component: PipesComponent },
  { path: "custom-pipes", component: CustomPipesComponent },
  { path: "data-handled-and-events", component: DataHandledAndEventsComponent },
  { path: "building-reusable-components", component: BuildingReusableComponentsComponent },
  { path: "ng-content", component: NgContentComponent },
  { path: "ng-container", component: NgContainerComponent },
  { path: "", component: WelcomeComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PropertyBindingComponent,
    PageNotFoundComponent,
    SidebarComponent,
    WelcomeComponent,
    AttributeBindingComponent,
    ClassBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    EventFilteringComponent,
    TemplateVariablesComponent,
    TwoWayBindingComponent,
    PipesComponent,
    CustomPipesComponent,
    DataHandledAndEventsComponent,
    SummaryPipe,
    BuildingReusableComponentsComponent,
    ComponentApiComponent,
    InputPropertiesComponent,
    AliasingInputPropertiesComponent,
    OutputPropertiesComponent,
    PassingEventDataComponent,
    AliasingOutputPropertiesComponent,
    TemplatesComponent,
    StylesComponent,
    ViewEncapsulationComponent,
    NgContentComponent,
    NgContainerComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: "enabled",
      anchorScrolling: "enabled",
      enableTracing: true
      //useHash: true
    }),
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
