import intl from "react-intl-universal"
import PageParent from "../components/PageParent"
import PageTitle from "../components/PageTitle"
import Timeline from "../components/Timeline"

const ExperiencePage = () => {
    const EVENTS = [
        {
            title: intl.get("MS_IN_COMPUTER_SCIENCE"),
            subtitle: intl.get("UNIVERSITY_OF_SOUTHERN_CALIFORNIA_SUBTITLE"),
            detail: intl.get("MS_IN_COMPUTER_SCIENCE_DETAIL"),
            icon: {
                src: `${process.env.PUBLIC_URL}/images/usc_logo.png`,
                alt: intl.get("UNIVERSITY_OF_SOUTHERN_CALIFORNIA_LOGO"),
            },
            date: intl.get("MS_IN_COMPUTER_SCIENCE_DATE"),
        },
        {
            title: intl.get("FULL_STACK_SOFTWARE_ENGINEER"),
            subtitle: intl.get("UCI_OFFICE_OF_INFORMATION_TECHNOLOGY_SUBTITLE"),
            detail: intl.get("FULL_STACK_SOFTWARE_ENGINEER_DETAIL"),
            icon: {
                src: `${process.env.PUBLIC_URL}/images/uci_oit_logo.png`,
                alt: intl.get("UCI_OFFICE_OF_INFORMATION_TECHNOLOGY_LOGO"),
            },
            date: intl.get("FULL_STACK_SOFTWARE_ENGINEER_DATE"),
        },
        {
            title: intl.get("RESEARCH_ASSISTANT"),
            subtitle: intl.get("UCI_DEEPEM_LAB_SUBTITLE"),
            detail: intl.get("RESEARCH_ASSISTANT_DETAIL"),
            icon: {
                src: `${process.env.PUBLIC_URL}/images/uci_logo.png`,
                alt: intl.get("UCI_DEEPEM_LAB_LOGO"),
            },
            date: intl.get("RESEARCH_ASSISTANT_DATE"),
        },
        {
            title: intl.get("BS_IN_COMPUTER_SCIENCE"),
            subtitle: intl.get("UNIVERSITY_OF_CALIFORNIA_IRVINE_SUBTITLE"),
            detail: intl.get("BS_IN_COMPUTER_SCIENCE_DETAIL"),
            icon: {
                src: `${process.env.PUBLIC_URL}/images/uci_logo.png`,
                alt: intl.get("UNIVERSITY_OF_CALIFORNIA_IRVINE_LOGO"),
            },
            date: intl.get("BS_IN_COMPUTER_SCIENCE_DATE"),
        },
        {
            title: intl.get("DATA_RESEARCH_INTERN"),
            subtitle: intl.get("CHANGING_THE_PRESENT_SUBTITLE"),
            detail: intl.get("DATA_RESEARCH_INTERN_DETAIL"),
            icon: {
                src: `${process.env.PUBLIC_URL}/images/changingthepresent_logo.png`,
                alt: intl.get("CHANGING_THE_PRESENT_LOGO"),
            },
            date: intl.get("DATA_RESEARCH_INTERN_DATE"),
        },
        {
            title: intl.get("HIGH_SCHOOL_STUDENT"),
            subtitle: intl.get("NYC_LAB_SCHOOL_FOR_COLLABORATIVE_STUDIES_SUBTITLE"),
            detail: intl.get("HIGH_SCHOOL_STUDENT_DETAIL"),
            icon: {
                src: `${process.env.PUBLIC_URL}/images/labhigh_logo.png`,
                alt: intl.get("NYC_LAB_HIGH_SCHOOL_LOGO"),
            },
            date: intl.get("HIGH_SCHOOL_STUDENT_DATE"),
        },
    ]

    return (
        <PageParent>
            <PageTitle title={intl.get("RELATED_EXPERIENCE")} />
            <Timeline events={EVENTS} />
        </PageParent>
    )
}

export default ExperiencePage
