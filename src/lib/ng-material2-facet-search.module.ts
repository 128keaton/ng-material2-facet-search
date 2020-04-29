import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { CsvPipe } from './pipes/csv/csv.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { KeysPipe } from './pipes/keys/keys.pipe';
export { Facet, FacetDataType, FacetFilterType, FacetOption } from './models';
import { FacetDetailsModalComponent } from './modals/facet-details-modal/facet-details-modal.component';
import { NgMaterial2FacetSearchComponent } from './ng-material2-facet-search.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {
	MatCommonModule,
	MatLineModule, MatNativeDateModule,
	MatOptionModule,
	MatPseudoCheckboxModule,
	MatRippleModule, NativeDateModule
} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSortModule} from '@angular/material/sort';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		FlexLayoutModule,
		// MATERIAL
		MatOptionModule,
		MatAutocompleteModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCardModule,
		MatCheckboxModule,
		MatChipsModule,
		MatCommonModule,
		MatDatepickerModule,
		MatDialogModule,
		MatDividerModule,
		MatExpansionModule,
		MatFormFieldModule,
		MatGridListModule,
		MatIconModule,
		MatInputModule,
		MatLineModule,
		MatListModule,
		MatMenuModule,
		MatNativeDateModule,
		MatPaginatorModule,
		MatProgressBarModule,
		MatPseudoCheckboxModule,
		MatProgressSpinnerModule,
		MatRadioModule,
		MatRippleModule,
		MatSelectModule,
		MatSidenavModule,
		MatSliderModule,
		MatSlideToggleModule,
		MatSnackBarModule,
		MatSortModule,
		MatStepperModule,
		MatTableModule,
		MatTabsModule,
		MatToolbarModule,
		MatTooltipModule,
		NativeDateModule

	],
	declarations: [
		CsvPipe,
		KeysPipe,
		FilterPipe,
		NgMaterial2FacetSearchComponent,
		FacetDetailsModalComponent
	],
	exports: [
		NgMaterial2FacetSearchComponent,

	],
	entryComponents: [
		FacetDetailsModalComponent
	]

})
export class NgMaterial2FacetSearchModule { }
