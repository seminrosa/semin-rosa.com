export type ResearchTopic = {
    title: string;
    description: string;
    papers: Paper[];
}

export type Paper = {
    title: string;
    citation: string;
    link?: string;
    description?: string;
}