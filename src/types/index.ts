export type Category =
    | 'traffic'
    | 'arrest'
    | 'fir'
    | 'search'
    | 'women'
    | 'bribe'
    | 'abuse'
    | 'other';

export interface LegalCitation {
    law: string;
    section: string;
    legacyRef?: string;
    description: string;
}

export interface EmergencyContact {
    name: string;
    number: string;
    badge: string;
    highlight?: boolean;
}

export interface ComplaintAuthority {
    authority: string;
    contact?: string;
    action: string;
}

export interface Point {
    heading: string;
    text: string;
}

export interface Scenario {
    id: string;
    title: string;
    category: Category;
    iconName: string;
    severity: 'urgent' | 'warning' | 'info';
    quickSummary: string;
    panicSteps: [string, string, string];
    yourRights: string[];
    immediateSteps: {
        dos: string[];
        donts: string[];
    };
    whereToComplain: ComplaintAuthority[];
    citations: LegalCitation[];
}

export interface CategoryTab {
    id: 'all' | Category;
    label: string;
}

export interface ComplaintGenLocale {
    title: string;
    subtitle: string;
    victimName: string;
    victimNamePlaceholder: string;
    phone: string;
    phonePlaceholder: string;
    stationCity: string;
    stationCityPlaceholder: string;
    officerDetails: string;
    officerDetailsPlaceholder: string;
    description: string;
    descPlaceholder: string;
    violationsDefault: string;
    previewDraft: string;
    copyBtn: string;
    copiedBtn: string;
    defaults: {
        name: string;
        city: string;
        phone: string;
        station: string;
        officer: string;
        description: string;
    };
    letterTemplate: string;
}

export interface LocaleData {
    langCode: string;
    langName: string;
    tagline: string;
    badgeText: string;
    dangerAlertBtn: string;
    emergencyHeader: string;
    searchPlaceholder: string;
    noResultsTitle: string;
    noResultsDesc: string;
    panicModeHeading: string;
    seeFullRightsBtn: string;
    hideFullRightsBtn: string;
    readAloudBtn: string;
    stopReadingBtn: string;
    rightsHeading: string;
    dosHeading: string;
    dontsHeading: string;
    complainHeading: string;
    highPriorityBadge: string;
    footer: {
        craftedBy: string;
        rightsReserved: string;
        links: {
            sources: string;
            disclaimer: string;
            github: string;
        };
    };
    disclaimerModal: {
        title: string;
        subtitle: string;
        points: Point[];
        closeBtn: string;
    };
    sourcesModal: {
        title: string;
        subtitle: string;
        closeBtn: string;
    };
    complaintGen: ComplaintGenLocale;
    emergencyNumbers: EmergencyContact[];
    categories: CategoryTab[];
    scenarios: Scenario[];
}