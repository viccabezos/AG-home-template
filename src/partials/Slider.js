import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

const style = {
  slider: "slider",
  previousButton: "previousButton ",
  nextButton: "nextButton",
  buttonDisabled: "disabled",
  track: "track",
  slide: "slide",
  hidden: "hidden",
  previous: "previous",
  current: "current",
  next: "next",
  animateIn: "animateIn",
  animateOut: "animateOut",
};

export default function Franchise() {
  const content = [
    {
      number: "1",
      title: "INFORMATION",
      description: "Vous contactez AG+ Énergies",
    },
    {
      number: "2",
      title: "DÉCOUVERTE",
      description:
        "Réunion générale d’information pour recueillir les informations globales sur la franchise AG+ Énergies. ",
    },
    {
      number: "3",
      title: "CANDIDATURE",
      description: "Vous adressez votre dossier de candidature.",
    },
    {
      number: "4",
      title: "ENTRETIEN",
      description:
        "Premier rendez-vous individuel avec le responsable recrutement pour partager votre projet entrepreneurial et vos expériences.",
    },
    {
      number: "5",
      title: "PREVISIONNEL",
      description:
        "Second rendez-vous individuel avec le responsable financier pour évaluer tous les aspects financiers, la territorialité, le business plan…",
    },
    {
      number: "6",
      title: "IMMERSION",
      description:
        "Rencontre avec Grégory, le fondateur, et son équipe pour 2 jours en immersion au siège d’Albi et en découverte terrain.",
    },
    {
      number: "7",
      title: "CONTRAT",
      description:
        "Entretien final pour la signature de votre contrat de franchise.",
    },
    {
      number: "8",
      title: "PLANNING",
      description:
        "Nous établissons ensemble le rétroplanning de votre lancement.",
    },
    {
      number: "9",
      title: "FORMATION",
      description: "Démarrage des 15 jours de formation intiale.",
    },
    { number: "10", title: "Vous démarrez votre activité!", description: "" },
  ];

  // const buttonPrevious = this.sliderRef.previous();

  // const buttonNext = this.sliderRef.next();

  // const previousClickHandler = () => {
  //   this.buttonPrevious();
  // };
  // const nextClickHandler = () => {
  //   this.buttonNext();
  // };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full justify-center items-center">
        <Slider autoplay={3000}>
          {content.map((slide, index) => (
            <div className="flex justify-center items-center" key={index}>
              <div className="flex space-x-2 h-32 mx-10">
                <h2 className="mx-5 font-bold">{slide.number}</h2>
              </div>
              <div className=" text-left h-32">
                <h2 className="text-xl">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      {/* SLIDER BUTTONS DOES NOT WORK
      
      <div>
        <button onClick={this.sliderRef.previousClickHandler()}>back</button>
        <button onClick={this.sliderRef.next()}>next</button>
        <Slider
          ref={(ref) => (this.sliderRef = ref)}
          previousButton={null}
          nextButton={null}
        >
          {content.map((item, index) => (
            <div
              key={index}
              className="slider-content"
              style={{
                background: `url('${item.image}') no-repeat center center`,
              }}
            >
              <div className="inner">
                <h1>{item.title}</h1>
                <p>{item.description}</p>
                <button>{item.button}</button>
              </div>
            </div>
          ))}
        </Slider>
      </div> */}
    </div>
  );
}
