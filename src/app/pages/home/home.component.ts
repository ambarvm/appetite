import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/data-service.service';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	searchString: string;
	searchResults;
	resultLoading = false;

	constructor(private dataService: DataServiceService) {}

	ngOnInit() {}

	onSearch($event) {
		this.searchString = $event;
		this.searchResults = this.getSearchResults();
	}

	updateLoader(value: boolean) {
		this.resultLoading = value;
	}

	// TODO: pass filter and sort data
	getSearchResults() {
		this.resultLoading = true;
		const results$ = this.dataService.fetchresults(this.searchString);
		results$.subscribe(() => this.updateLoader(false));
		return results$;
	}
}
