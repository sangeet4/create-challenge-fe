import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ChallengeService } from '../challenge.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  constructor(private fb: FormBuilder, private questService: ChallengeService) {}

  availbLang = [ 'Java' ];

  questDesc: FormGroup;

  ngOnInit() {
    this.questDesc = this.fb.group({
      id : ['', [Validators.required]],
      challengeTitle : ['', [Validators.required]],
      challengeDesc : ['', [Validators.required]],
      problemStat : ['', [Validators.required]],
      inputFormat : ['', [Validators.required]],
      constraints : ['', [Validators.required]],
      outputFormat : ['', [Validators.required]],
      maxScore : ['', [Validators.required, Validators.min(5), Validators.max(100)]],
      maxRuntime : ['', Validators.required],
      progLang : ['', Validators.required],
      solutionUrl : ['', Validators.required],
      level : ['', Validators.required],
      rating : ['', Validators.required]
    });
  }

  get id() {return this.questDesc.get('id'); }

  get title() { return this.questDesc.get('challengeTitle'); }

  get desc() { return this.questDesc.get('challengeDesc'); }

  get stat() { return this.questDesc.get('problemStat'); }

  get inFormat() { return this.questDesc.get('inputFormat'); }

  get constraints() { return this.questDesc.get('constraints'); }

  get outFormat() { return this.questDesc.get('outputFormat'); }

  get maxScore() { return this.questDesc.get( 'maxScore' ); }

  get maxRuntime() { return this.questDesc.get('maxRuntime'); }

  get progLang() { return this.questDesc.get('progLang'); }

  get solutionUrl() { return this.questDesc.get('solutionUrl'); }

  get level() { return this.questDesc.get('level'); }

  get rating() { return this.questDesc.get('rating'); }

  onSubmit() {
    if (this.questDesc.invalid) {
      return;
    }
    console.log(this.questDesc.value);
    alert('The form was submitted');
    this.questService.createChallenge(this.questDesc.value)
      .subscribe(data => {
        console.log('POST Success');
      });
    this.questDesc.reset();
  }

}
