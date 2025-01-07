import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  accDetails = [
    {
      accHeader: 'What Services Do You Offer?',
      details:
        'At Avira World Technology Consulting Services, we specialize in Web Design and Development, Mobile Application Development, Infrastructure/Cloud, DevOps, Site Reliability Engineering, and Cyber Security. We are your one-stop-shop for all things tech!',
    },
    {
      accHeader: 'Why Choose Us?',
      details:
        'Choose us for a tech experience that is out of this world! Our team of experts will take your project to new heights, ensuring it is not just good, but stellar. We are not just tech-savvy, we are tech-superheroes!',
    },
    {
      accHeader: 'How Can I Contact You?',
      details:
        'Ready to blast off into the tech universe with us? Reach out to us via carrier pigeon, smoke signals, or the good old email at supportaviraworld.co.in. We are always here to chat about your next big tech adventure!',
    },
    {
      accHeader: 'Do You Offer Support?',
      details:
        'Absolutely! Our support team is like having a personal tech genie. We will grant your tech wishes and ensure your journey with us is smooth sailing. No tech problem is too big for us to tackle!',
    },
    {
      accHeader: 'Are You Hiring Tech Wizards?',
      details:
        'Calling all tech wizards! If you are ready to join a team that is as cool as a cucumber and as hot as a supernova, then look no further. Send us your resume at supportaviraworld.co.in and let us create tech magic together!',
    }
  ];

  activeIndex: number | null = null;

  toggleAccordion(index: number): void {
    this.activeIndex = this.activeIndex === index ? null : index;
  }
}
