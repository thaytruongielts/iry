import { ReadingSection, Question, QuestionType } from './types';

export const SECTIONS: ReadingSection[] = [
  {
    id: 1,
    title: "The Beginnings of Art Therapy",
    content: [
      "Art therapy is a relative newcomer to the therapeutic field. Art therapy as a profession began in the mid-20th century, arising independently in English-speaking and European countries. Many of the early practitioners of art therapy acknowledged the influence of a variety of disciplines on their practices, ranging from psychoanalysis through to aesthetics and early childhood education. However, the roots of art as therapy go back as far as the late 18th century, when arts were used in the 'moral treatment' of psychiatric patients.",
      "It wasn't until 1942, however, that the British artist Adrian Hill coined the term 'art therapy', as he was recovering from tuberculosis in a sanatorium. He discovered that therapeutic benefits could be derived from drawing and painting whilst recovering. Art, he claimed, could become therapeutic since it was capable of 'completely engrossing the mind... releasing the creative energy of the frequently inhibited patient'. This effect, argued Hill, could in turn help the patient as it would 'build up a strong defence against his misfortunes'.",
      "In 1964, the British Association of Art Therapists was founded. Proponents of art therapy fell into one of two categories: those who believed that the therapeutic effect of art lay in its effectiveness as a psychoanalytic tool to assess a patient through their drawings and those who held the belief that art-making was an end in itself, the creative process acting therapeutically on the patient. The two practices, however, were not incompatible, a degree of overlap occurring between the two. A patient, for example, could produce work that could be analysed for content and forms of self-expression but which could also be a creative outlet at the same time."
    ]
  },
  {
    id: 2,
    title: "Who Benefits from Art Therapy",
    content: [
      "Art therapy in all its forms has proved effective in the treatment of individuals suffering with a wide range of difficulties or disabilities. These include emotional, behavioural or mental health problems, learning or physical disabilities. These include emotional, behaviour or mental health problems, learning or physical disabilities, neurological conditions and physical illness. Therapy can be provided on a group or individual basis according to the clients' needs. Whether the approach adopted by the therapist is oriented towards a psychoanalytic or creative approach, the effect of therapy is multifold. Partaking in art therapy can raise a patient's self-awareness and enable them to deal with stress and traumatic experience. In addition, art therapy sessions can enhance a patient's cognitive abilities and help the patient enjoy the life-affirming pleasures of making art."
    ]
  },
  {
    id: 3,
    title: "What an Art Therapy Session Involves",
    content: [
      "Typically, an art therapy session is fundamentally different from an art class in that the individual is encouraged to focus more on their internal feelings and to express them, rather than portray external objects. Although some traditional art classes may ask participants to draw from their imagination, in art therapy the patient's inner world of images, feelings, thoughts and ideas are always of primary importance to the experience. Any type of visual art and medium can be employed in the therapeutic process including painting, drawing, sculpture, photography and digital art.",
      "Art therapy sessions are usually held by skilled and qualified professionals. The presence primarily of the therapist is to be in attendance, guiding and encouraging artistic expression in the patient, in accordance with the original meaning of the word for therapy derived from the Greek word 'therapeia', meaning 'being attentive to'."
    ]
  },
  {
    id: 4,
    title: "The Regulation of Art Therapy",
    content: [
      "Requirements for those wishing to become an art therapist vary from country to country. In the USA, where entry to the profession is highly regulated, a master's degree in art therapy is essential. In addition, those applying for such a post must have taken courses in a variety of studio art disciplines in order to demonstrate artistic proficiency. On completion of the master's degree, candidates also have to complete a minimum of 1000 hours of direct client contact post-graduation that is approved by the American Art Therapy Association (AATA).",
      "However, whilst entry to the profession is strictly regulated in the USA, the same does not hold true for other countries. The problem is that art therapy is still considered a developing field. As such, until it becomes truly established as a therapy, its practice and application will remain unregulated in many countries for some time yet."
    ]
  }
];

export const QUESTIONS_27_33: Question[] = [
  { id: 27, type: 'TFNG', answer: 'NOT GIVEN', text: 'The artist Adrian Hill was strongly influenced by psychoanalytic theories when formulating his ideas on art therapy.' },
  { id: 28, type: 'TFNG', answer: 'TRUE', text: 'Twentieth-century art therapy focuses on treating a client’s mental or physical health problems rather than dealing with moral issues.' },
  { id: 29, type: 'TFNG', answer: 'NOT GIVEN', text: 'Approaches to art therapy can be broadly considered to be creative or psychoanalytic; however, practitioners tend to avoid combining the two schools of practice.' },
  { id: 30, type: 'TFNG', answer: 'NOT GIVEN', text: 'Clients who respond best to art therapy have a previous background in art.' },
  { id: 31, type: 'TFNG', answer: 'TRUE', text: 'Art therapy sessions are more concerned with expression through art than on the created art itself.' },
  { id: 32, type: 'TFNG', answer: 'FALSE', text: 'Many art therapists are insufficiently qualified as they are not aware of the regulations regarding the practice of art therapy.' },
  { id: 33, type: 'TFNG', answer: 'FALSE', text: 'Art therapy sessions involve limited interaction between therapist and client.' },
];

export const QUESTIONS_34_37: Question[] = [
  { id: 34, type: 'SENTENCE_COMPLETION', answer: 'variety of', textBefore: 'The early pioneers of art therapy admitted that their beliefs had been shaped by a', textAfter: 'influences.' },
  { id: 35, type: 'SENTENCE_COMPLETION', answer: 'therapeutic benefits', textBefore: 'Artist Adrian Hill realised the', textAfter: 'of art as therapy, and coined the term "art therapy" in 1942.' },
  { id: 36, type: 'SENTENCE_COMPLETION', answer: 'creative process', textBefore: 'Those supporting art therapy advised a psychoanalytic approach or alternatively one that placed more emphasis on the', textAfter: 'itself.' },
  { id: 37, type: 'SENTENCE_COMPLETION', answer: 'not incompatible', textBefore: 'Whilst theories behind art therapy may differ, they are', textAfter: 'in practice.' },
];

export const SUMMARY_TEXT_PARTS = [
  "Modern-day art therapy has its beginnings in the 1940s. Adrian Hill, one of its early pioneers, realised that art therapy was effective in helping patients create a", // 38
  "resistance to psychological and social stresses. Hill considered that", // 39
  "patients would particularly benefit form having an artistic outlet. Art therapy then developed into two types of practice, one emphasising a psychoanalytic approach and the other a more", // 40
  "one. Today there is often an overlap between the two practices."
];

export const SUMMARY_OPTIONS = [
  { label: 'A', value: 'capable' },
  { label: 'B', value: 'strong' },
  { label: 'C', value: 'keen' },
  { label: 'D', value: 'inhibited' },
  { label: 'E', value: 'creative' },
  { label: 'F', value: 'therapeutic' },
];

export const QUESTIONS_38_40: Question[] = [
  { id: 38, type: 'SUMMARY_COMPLETION', answer: 'B', options: SUMMARY_OPTIONS },
  { id: 39, type: 'SUMMARY_COMPLETION', answer: 'D', options: SUMMARY_OPTIONS },
  { id: 40, type: 'SUMMARY_COMPLETION', answer: 'E', options: SUMMARY_OPTIONS },
];

export const ALL_QUESTIONS = [...QUESTIONS_27_33, ...QUESTIONS_34_37, ...QUESTIONS_38_40];

// Times in seconds
export const TIMINGS = {
  READ_1: 60,
  ANSWER_1: 72,
  READ_2: 60,
  ANSWER_2: 72,
  READ_3: 60,
  ANSWER_3: 72,
  READ_4: 90, // 1.5 min
  ANSWER_4: 72,
  REVIEW: 150, // 2.5 min
};