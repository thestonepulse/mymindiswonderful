const knowledge = [
  {id:"forest", title:"The forest beneath the forest", category:"Nature", time:"8 min", description:"Roots, fungi, soil and the hidden relationships that turn individual organisms into an ecosystem.", image:"forest-image", tags:["forest","fungi","ecology"], evidence:"Evidence", date:"20 Aug 2026"},
  {id:"dreams", title:"Why do we dream?", category:"Mind", time:"7 min", description:"What science knows, what it suspects, and what remains beautifully uncertain.", image:"dream-image", tags:["dreams","sleep","mind"], evidence:"Evidence + theories", date:"17 Aug 2026"},
  {id:"moss", title:"What moss can tell you", category:"Field Notes", time:"5 min", description:"A small plant can become a doorway into climate, microhabitats and the art of noticing.", image:"moss-image", tags:["moss","observation","habitats"], evidence:"Observation", date:"15 Aug 2026"},
  {id:"navigation", title:"How people learned to read the landscape", category:"Wisdom", time:"9 min", description:"Traditional navigation draws on stars, coastlines, weather, landmarks and generations of accumulated observation.", image:"sky-image", tags:["navigation","tradition","landscape"], evidence:"Historical knowledge", date:"10 Aug 2026"},
  {id:"curiosity", title:"Curiosity is a behaviour, not just a feeling", category:"Philosophy", time:"6 min", description:"Why questions can change what we notice — and why uncertainty can be useful.", image:"dream-image", tags:["curiosity","learning","philosophy"], evidence:"Evidence + interpretation", date:"06 Aug 2026"},
  {id:"evolution", title:"Evolution does not have a destination", category:"Science", time:"8 min", description:"A closer look at natural selection, adaptation and why evolution is not a march toward perfection.", image:"forest-image", tags:["evolution","adaptation","biology"], evidence:"Evidence", date:"01 Aug 2026"}
];

const articleContent = {
 forest: {
  subtitle:"A woodland is not a collection of separate organisms. It is a network of relationships.",
  author:"mymindiswonderful",
  hero:"forest-image",
  sections:[
   ["Start with the soil","Look down and a forest can seem quiet. Beneath the surface, however, roots, fungi, bacteria, insects, water and minerals form a constantly changing system. The visible trees are only one layer of it."],
   ["The fungal thread","Many plants form associations with fungi around their roots. These mycorrhizal relationships can improve access to nutrients and water while the fungus receives carbon from the plant. The exact relationships vary enormously between species and environments."],
   ["A system, not a machine","It is tempting to describe a forest as if it were a perfectly coordinated organism. That goes too far. Forests contain competition, cooperation, disturbance and chance. Their complexity comes from interactions rather than from a single controlling intelligence."],
   ["The useful question","Instead of asking only “what is this tree?”, try asking “what is this tree connected to?” The question opens doors into soil science, ecology, evolution and even the history of human relationships with landscapes."]
  ]
 },
 dreams: {
  subtitle:"Dreaming is familiar to nearly everyone, but its purpose remains an open scientific question.",
  author:"mymindiswonderful",
  hero:"dream-image",
  sections:[
   ["What we know","Dreaming is strongly associated with sleep, especially REM sleep, although dream reports can occur from other sleep stages too. People differ greatly in how often and how vividly they remember dreams."],
   ["What remains uncertain","Researchers have proposed several functions for dreaming, including roles in memory processing, emotion and simulation. None of these explanations should be treated as a single settled answer."],
   ["A useful distinction","There is a difference between studying the biological mechanisms associated with dreaming and interpreting the meaning of an individual dream. The former can be investigated scientifically; the latter often enters psychology, culture and personal reflection."],
   ["An open question","Perhaps the most interesting part is that consciousness can produce an internally experienced world while the body is asleep. Understanding why remains one of the stranger questions in neuroscience."]
  ]
 },
 moss: {
  subtitle:"Sometimes the smallest organisms teach us how to pay attention.",
  author:"mymindiswonderful",
  hero:"moss-image",
  sections:[
   ["Notice the microhabitat","Moss often occupies tiny environments where moisture, shade, surface texture and temperature differ from the surrounding area. Looking closely turns a familiar path into a miniature landscape."],
   ["Do not overinterpret","Moss presence alone is not a reliable universal indicator of air quality or a single environmental condition. Species, substrate and local climate all matter."],
   ["The field-journal lesson","The useful practice is not to turn every observation into a dramatic conclusion. Record what you saw first. Ask questions second. Interpret only when you have enough evidence."]
  ]
 },
 navigation: {
  subtitle:"Before maps and phones, landscapes themselves were sources of information.",
  author:"mymindiswonderful",
  hero:"sky-image",
  sections:[
   ["Reading place","Across different cultures, people have developed sophisticated ways of navigating using stars, coastlines, rivers, mountains, winds, currents, seasonal changes and remembered landmarks."],
   ["Knowledge is local","Traditional ecological and navigational knowledge is often deeply tied to a particular landscape. It should not be treated as a generic collection of tricks detached from the people and communities who developed it."],
   ["Preserving without flattening","Documenting traditional knowledge requires attribution and context. A respectful archive distinguishes what is historically documented from what a modern observer infers."]
  ]
 },
 curiosity: {
  subtitle:"A question changes the path your attention takes.",
  author:"mymindiswonderful",
  hero:"dream-image",
  sections:[
   ["Curiosity begins with a gap","We notice that we do not know something. That gap can feel uncomfortable, but it can also become motivation to explore."],
   ["Questions guide attention","Once you ask a question, you begin noticing relevant details. This is useful — and also a reason to stay critical, because attention can become selective."],
   ["Keep the uncertainty","A good knowledge practice does not eliminate uncertainty just to make an answer feel complete. Sometimes the honest conclusion is: we do not know yet."]
  ]
 },
 evolution: {
  subtitle:"Evolution has no finish line. Organisms are shaped by changing environments, variation and differential survival and reproduction.",
  author:"mymindiswonderful",
  hero:"forest-image",
  sections:[
   ["No predetermined destination","Natural selection does not aim toward perfection. Traits that help in one environment may be less useful when conditions change."],
   ["Adaptation is contextual","An adaptation is a heritable feature that has become common because it affected reproductive success in a particular environment. It is not simply a trait that an organism developed because it needed it."],
   ["Why this matters","Thinking about evolution as branching change rather than a ladder helps explain biodiversity, extinction and the extraordinary variety of life."]
  ]
 }
};