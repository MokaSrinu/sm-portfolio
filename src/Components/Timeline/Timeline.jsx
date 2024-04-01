import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {
  Work as WorkIcon,
  School as SchoolIcon,
  StarRate as StarRateIcon,
} from "@material-ui/icons";
import { ThemeContext } from "../../Context/theme";
import classes from "./Timeline.module.css";

const TimeLineData = [
  {
    title: "Frontend Developer at Grayquest",
    subtitle: "",
    description:
      "Expertly crafting seamless user experiences with the power of React.js and Next.js.",
    icon: <WorkIcon />,
    date: "August 2022 - Present",
  },
  {
    title: "Student at Masai School",
    subtitle: "",
    description: "Mastered Software Development in Military Style Bootcamp",
    icon: <SchoolIcon />,
    date: "December 2021 - August 2022",
  },
  {
    title: "Bachelor of Technology, Computer Science & engineering",
    subtitle: "",
    description:
      "Miracle Educational Society Group Of Institutions, Vizianagaram, AndhraPradesh",
    icon: <SchoolIcon />,
    date: "2018 - 2022",
  },
  {
    title: "Completed Higher Secondary - Science",
    subtitle: "",
    description: "NRI Junior College, Vishakapatnam, Andhra Pradesh",
    icon: <SchoolIcon />,
    date: "2016 - 2018",
  },
];

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);
  return (
    <div className={`${classes.MainSection} section`}>
      <h2 className="section__title" data-aos="zoom-in">
        My <span className={classes.Different}>Timeline 💫</span>
      </h2>
      <section className={classes.TimeLine}>
        <VerticalTimeline lineColor={linecolor}>
          {TimeLineData?.map((timeLine, index) => (
            <VerticalTimelineElement
              key={index}
              className="vertical-timeline-element--work"
              date={timeLine?.date}
              contentStyle={{
                boxShadow: `var(--shadow)`,
                backgroundColor: `var(--clr-bg)`,
                textAlign: "center",
                color: `var(--clr-fg-alt)`,
              }}
              contentArrowStyle={{
                borderRight: "16px solid  rgb(33, 150, 243)",
              }}
              iconStyle={{
                backgroundColor: `var(--clr-bg)`,
                color: `var(--clr-primary)`,
              }}
              icon={timeLine?.icon}
            >
              <div data-aos="zoom-in">
                <h2 className={classes.TimeLineTitle} >
                  {timeLine?.title}
                </h2>
                {/* <h4
                className={classes.TimeLineSubTitle}
                data-aos="fade-right"
              >
                {timeLine?.subtitle}
              </h4> */}
                <p className={classes.TimeLineDes}>
                  {timeLine?.description}
                </p>
              </div>
            </VerticalTimelineElement>
          ))}

          <VerticalTimelineElement
            icon={<StarRateIcon />}
            iconStyle={{
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
          ></VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </div>
  );
};
