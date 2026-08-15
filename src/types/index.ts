export type Category =
    | 'traffic'
    | 'arrest'
    | 'fir'
    | 'search'
    | 'women'
    | 'bribe'
    | 'abuse';

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
}

export interface ComplaintAuthority {
    authority: string;
    contact?: string;
    action: string;
}

export interface Scenario {
    id: string;
    title: string;
    category: Category;
    iconName: string;
    severity: 'urgent' | 'warning' | 'info';
    quickSummary: string;
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

export interface LocaleData {
    langCode: string;
    langName: string;
    appName: string;
    tagline: string;
    badgeText: string;
    emergencyHeader: string;
    legalCitationsBtn: string;
    searchPlaceholder: string;
    noResultsTitle: string;
    noResultsDesc: string;
    rightsHeading: string;
    dosHeading: string;
    dontsHeading: string;
    complainHeading: string;
    highPriorityBadge: string;
    footer: {
        builtFor: string;
        disclaimer: string;
    };
    sourcesModal: {
        title: string;
        subtitle: string;
        closeBtn: string;
    };
    complaintGen: {
        title: string;
        subtitle: string;
        victimName: string;
        phone: string;
        stationCity: string;
        officerDetails: string;
        description: string;
        descPlaceholder: string;
        previewDraft: string;
        copyBtn: string;
        copiedBtn: string;
    };
    emergencyNumbers: EmergencyContact[];
    categories: CategoryTab[];
    scenarios: Scenario[];
}