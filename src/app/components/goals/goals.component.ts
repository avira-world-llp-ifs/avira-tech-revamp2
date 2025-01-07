import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss']
})
export class GoalsComponent {
  cardDetails: any = [
    {
      cardHeader:'Stakeholders',
      details:'We kick off every project with in-depth discussions with key stakeholders. This step allows us to gain a comprehensive understanding of your business objectives, challenges, and aspirations.',
    },
    {
      cardHeader:'Shortcomings',
      details:'Once we have gathered insights from stakeholders, we dive deep into analyzing your current systems and processes. We identify shortcomings, pain points, and areas for improvement.',
    },
    
    {
      cardHeader:'Collaboration',
      details:'Collaboration is at the heart of our approach. We foster open communication and collaboration to ensure that everyone is on board and invested in the success of the project.',
    },
    {
      cardHeader:'Execution',
      details:'With a solid understanding of your needs and a clear roadmap in place, we move into the execution phase. We maintain a focus on quality, timeliness, and budget adherence throughout the execution process.',
    }
  ];
}
