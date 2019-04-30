const randomItem = require("./randomItem");
const _ = require("lodash");

const tags = [
  "#deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs #abstractpainting #abstractart #drippingart #artists #trippy #programming #software",
  "#tech #technology #techno #technologies #techie #techy #software #softwareengineer #softwareengineering #artificialintelligence #ai #ml #machinelearning #deeplearning #javascript #nodejs #python #api #deepdream #deep #engineer #engineers #engineering #deepdream #deeplearning #arts #visualarts #visualart #photography",
  "#photo #photos #photooftheday #photography #photographers #photoshoot #photoshop #photos #photogrid #photograph #photoart #photojournalism #photographie #photographs #photographerlife #phototechnique #phototech #deepdream #deeplearning #arts #visualarts #visualart #fun #psychedelics #psychedelicarts #nodejs #abstractpainting",
  "#art #artistoninstagram #artistsoninstagram #artist #arte #artesanato #artsy #artspotlight #arts #artwork #artspotlight #artsy #artistic #artesanal #artlovers #artofvisuals #artworks #artwork #streetart #abstractart #artbasel #artists #deepdream #deeplearning #arts #visualarts #visualart #photography #visualartist #javascript",
  "#graphic #graphicdesigner #graphicdesign #graphiccontent #graphic_art #graphic_arts #graphic45 #graphicliner #graphictatoo #graphiart #graphicdesigns #graphicgang #graphicinspiration #graphicnovel #graphicoftheday #graphicartist #graphicdesigncentral #deepdream #deeplearning #arts #visualarts #visualart #visualartist #javascript",
  "#psych #psychology #psychedelic #psychedelics #psychic #psychics #psychedelicart #psycho #psychologie #psychotherapie #psychedelica #psychodelicart #psychedelicpainting #psychedelicarts #psychedelicfestival #psychedelicpaint #art #artistoninstagram #artistsoninstagram #artist #arte #artesanato #artsy #artspotlight #arts #artwork",
  "#mind #mindset #mindthegap #mindful #mindbodygreen #mindsetofgreatness #mindfulness #minds #mindgames #medite #meditations #meditar #meditaciones #meditated #meditacao #meditacion #meditationquotes #meditate #meditative #meditativeart #art #artistoninstagram #artistsoninstagram #artist #arte #artesanato #artsy #arts #artwork",
  "#paint #paints #painting #paintings #paintmixing #painter #painted #painteveryday #speedpaint #paintisdead #paintingprocess #acrylicpainting #painttoolsai #paintingoftheday #originalpainting #acrylicpaintings #oilpainting #paintlife #digitalpainting #paintingart #paintersofinstagram #intuitivepainting #paintparty #digitalpaint",
  "#abstract #abstractart #abstractarts #abstract_art #abstract_arts #abstracts #abstracto #abstract_post #abstractpost #abstractposts #abstractpost #abstractors #abstractartist #abstractlandscape #abstractpainting #abstractionism #abstractphoto #abstractobsession #abstractpainter #abstractpainters #abstracture #abstractartwork",
  "#dream #dreams #dreamy #dreamer #dreamers #dreamlife #dreamcatchers #dreamcatcher #dreamland_arts_of_nature #dreamchaser #dream_chaser #dream_chasers #dreamchasers #dreamwork #dreaminstreets #dreambigger #deepdream #deeplearning #arts #visualarts #visualart #photography #visualartist #javascript",
  "#innovation #innovations #innovative #innovators #innovator #innovate #paintingprocess #acrylicpainting #painttoolsai #paintingoftheday #originalpainting#innov8 #innovazione #innovaciones #innovador #innovadores #deepdream #deeplearning #arts #visualarts #visualart #javascript #fun #psychedelics #psychedelicarts #nodejs",
  "#beauty #beauties #beautiful #beautifull #beautiful_world #beautifulworld #beautifulart #beautifullife #lovely #lovelyz #awesome #awesome_hdr #awesomeness #awesome_earth #awesomeearth #surreal #awesome_shots #awesomeshots #awesomesurreal #awesome_surreal #awesomepix #awesomelife #awesomeart #scienceisawesome #awesomepics",
  "#awesomepictures #dreampop #dreambigger #insta #instagram #instagood #instapic #instaart #instadaily #instagrammers #instacool #instaart #instaphoto #fun #instamood #instastyle #instalove #instalike #instamoment #instafun #instaphotography #instalikes #instalike #deepdream #deeplearning #arts #visualarts #visualart #photography",
  "#graphicdesign #dreampop #photoart #instalike #deepdream #psychology #abstracts #consciousness #arte #abstractpost #psychedelicart #psychedelicpaint #psychedelicfestival #paintersofinstagram #dreaminstreets #intuitivepainting #instaphoto #abstractpainting #engineer #photos #art #technology #visualart #artwork",
  "#arts #instagood #instagrammers #dreamlife #psychology #mindthegap #artesanato #meditative #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#instafun #dream_chasers #deepdream #instalove #technology #abstractobsession #painted #artsy #artwork #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#deepdream #dreamchaser #automatedart #visualart #arts #javascript #graphiart #photography #dreamwork #abstract_art #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #visualartist #psychedelics #psychedelicarts #nodejs",
  "#psychedelics #abstractpost #dreamchaser #innovators #javascript #graphicdesign #graphiart #photography #automatedart #graphic #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #visualart #visualartist #psychedelicarts #nodejs",
  "#intelligentart #oilpainting #mindsetofgreatness #originalpainting #abstractphoto #graphiart #visualart #dreampop #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #automatedart #assistedart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#deeplearning #innovazione #psychedelics #photography #abstractobsession #javascript #visualartist #graphiart #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #psychedelicarts #nodejs",
  "#assistedart #dreams #dreamchaser #graphic45 #graphic #mindsetofgreatness #visualarts #javascript #deepdream #deeplearning #arts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #visualart #photography #visualartist #psychedelics #psychedelicarts #nodejs",
  "#psychedelicart #automatedart #beautifull #arte #photoshop #intelligentart #javascript #dreams #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #assistedart #visualart #photography #visualartist #psychedelics #psychedelicarts #nodejs",
  "#nodejs #visualart #deeplearning #mindsetofgreatness #psychedelicarts #arts #artificialintelligence #paintingart #psychedelics #deepdream #visualarts #ai #machinelearning #intelligentart #automatedart #assistedart #photography #visualartist #javascript",
  "#instamoment #dreams #arts #automatedart #photos #photography #painting #mindsetofgreatness #dreamwork #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #visualart #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#psychedelics #artificialintelligence #deeplearning #oilpainting #deepdream #photojournalism #dreamwork #visualart #dreamchaser #artistic #arts #visualarts #ai #machinelearning #intelligentart #automatedart #assistedart #photography #visualartist #javascript #psychedelicarts #nodejs",
  "#arts #psychedelicart #machinelearning #instamoment #psychedelics #instalike #intelligentart #abstractpainter #dreamwork #deepdream #deeplearning #visualarts #artificialintelligence #ai #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelicarts #nodejs",
  "#mindsetofgreatness #visualart #javascript #automatedart #psychology #awesomeart #artificialintelligence #fun #artwork #deepdream #deeplearning #arts #visualarts #ai #machinelearning #intelligentart #assistedart #photography #visualartist #psychedelics #psychedelicarts #nodejs",
  "#painteveryday #arts #acrylicpaintings #graphiart #visualartist #phototechnique #meditacion #photos #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#instalove #abstractpost #deeplearning #artsy #tech #visualartist #nodejs #abstractpainting #arte #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #javascript #psychedelics #psychedelicarts",
  "#awesomeart #visualart #visualarts #abstractpost #visualartist #machinelearning #assistedart #psychology #graphicliner #deepdream #deeplearning #arts #artificialintelligence #ai #intelligentart #automatedart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#artsy #visualartist #acrylicpaintings #api #deeplearning #psychology #javascript #abstractpost #graphiart #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #psychedelics #psychedelicarts #nodejs",
  "#originalpainting #intuitivepainting #arts #visualarts #awesome #arte #psychedelics #artspotlight #deepdream #meditar #deeplearning #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelicarts #nodejs",
  "#abstractpainting #awesomepix #deeplearning #visualart #photography #fun #consciousnessshift #programming #instaart #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#artificialintelligence #psychedelics #visualart #deepdream #deeplearning #dreamwork #visualartist #artesanato #arts #visualarts #ai #machinelearning #intelligentart #automatedart #assistedart #photography #javascript #psychedelicarts #nodejs",
  "#instafun #graphiart #psychedelicfestival #visualarts #arts #innovation #beauties #psycho #machinelearning #meditative #deepdream #deeplearning #artificialintelligence #ai #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#nodejs #psychedelicarts #ai #javascript #arts #artistsoninstagram #artistoninstagram #psychedelicart #instacool #deepdream #deeplearning #visualarts #artificialintelligence #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #psychedelics",
  "#arts #innovator #innovadores #instacool #techie #psychedelicarts #graphiccontent #abstract_arts #machinelearning #javascript #deepdream #deeplearning #visualarts #artificialintelligence #ai #intelligentart #automatedart #assistedart #visualart #photography #visualartist #psychedelics #nodejs",
  "#artwork #mindsetofgreatness #javascript #instapic #photos #instalike #deepdream #arte #paintingart #visualartist #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #psychedelics #psychedelicarts #nodejs",
  "#instamoment #meditations #intuitivepainting #paintparty #graphiart #psychedelicarts #assistedart #arts #intelligentart #graphicoftheday #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #automatedart #visualart #photography #visualartist #javascript #psychedelics #nodejs",
  "#visualartist #artists #artistsoninstagram #nodejs #abstractpost #artsy #psychedelicfestival #photos #graphicdesigner #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #javascript #psychedelics #psychedelicarts",
  "#acrylicpaintings #javascript #dreamwork #consciousness #intelligentart #instadaily #graphic #deepdream #deeplearning #paintersofinstagram #arts #visualarts #artificialintelligence #ai #machinelearning #automatedart #assistedart #visualart #photography #visualartist #psychedelics #psychedelicarts #nodejs",
  "#artificialintelligence #deeplearning #psychedelicarts #arte #instagood #psychedelics #nodejs #instalike #deep #javascript #deepdream #arts #visualarts #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist",
  "#instagood #graphic #streetart #graphicdesign #abstract_art #deeplearning #visualartist #arte #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#programming #visualartist #instaart #paintings #ai #instalove #deeplearning #visualart #psychology #nodejs #deepdream #arts #visualarts #artificialintelligence #machinelearning #intelligentart #automatedart #assistedart #photography #javascript #psychedelics #psychedelicarts",
  "#visualart #automatedart #dream_chasers #graphiccontent #beautifull #nodejs #deeplearning #artworks #meditative #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #photography #visualartist #javascript #psychedelics #psychedelicarts",
  "#psychedelicarts #dreaminstreets #psychedelicfestival #graphicdesign #abstractart #awesomesurreal #artwork #artificialintelligence #paintingart #acrylicpaintings #deepdream #deeplearning #arts #visualarts #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #nodejs",
  "#deepdream #artists #dreamland_arts_of_nature #meditative #photography #meditations #nodejs #assistedart #machinelearning #deeplearning #arts #visualarts #artificialintelligence #ai #intelligentart #automatedart #visualart #visualartist #javascript #psychedelics #psychedelicarts",
  "#abstracto #innovate #innovators #instalike #deeplearning #meditative #graphic #visualarts #photos #deepdream #arts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#dreamwork #innovaciones #abstractors #engineer #paintings #mindbodygreen #psychedelics #photography #psychedelicpaint #visualart #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualartist #javascript #psychedelicarts #nodejs",
  "#ml #visualart #photos #photoart #innovations #instalike #python #software #arts #innovazione #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#graphicdesigns #artsy #awesomeart #artificialintelligence #psychedelics #assistedart #api #dreams #arts #photography #deepdream #deeplearning #visualarts #ai #machinelearning #intelligentart #automatedart #visualart #visualartist #javascript #psychedelicarts #nodejs",
  "#visualartist #abstractpost #abstractart #visualarts #photojournalism #arte #originalpainting#innov8 #deepdream #artsy #assistedart #deeplearning #arts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #visualart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#beautifull #deepdream #beautiful #meditationquotes #artesanato #dreamer #streetart #arts #instaphotography #nodejs #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts",
  "#instagood #assistedart #oilpainting #dreamwork #dream_chasers #mind #visualarts #machinelearning #mindbodygreen #psychotherapie #deepdream #deeplearning #arts #artificialintelligence #ai #intelligentart #automatedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#visualarts #abstractart #artofvisuals #artistoninstagram #javascript #deepdream #abstractarts #abstractobsession #photoshop #automatedart #deeplearning #arts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #visualart #photography #visualartist #psychedelics #psychedelicarts #nodejs",
  "#innovate #instagram #arts #artofvisuals #instacool #psychedelics #psychedelicarts #javascript #assistedart #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #visualart #photography #visualartist #nodejs",
  "#psychedelics #paintingart #psychedelicarts #photography #arts #abstractpainter #graphic_art #awesomepix #dreamwork #minds #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #visualartist #javascript #nodejs",
  "#machinelearning #abstractpainter #instalove #instalike #visualart #artificialintelligence #visualartist #graphicartist #graphiart #deeplearning #deepdream #arts #visualarts #ai #intelligentart #automatedart #assistedart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#javascript #artsy #artificialintelligence #abstractobsession #minds #paintings #speedpaint #nodejs #acrylicpainting #automatedart #deepdream #deeplearning #arts #visualarts #ai #machinelearning #intelligentart #assistedart #visualart #photography #visualartist #psychedelics #psychedelicarts",
  "#javascript #psychedelics #visualart #photography #deeplearning #nodejs #lovely #digitalpaint #deepdream #visualarts #arts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualartist #psychedelicarts",
  "#oilpainting #abstract_art #arts #digitalpainting #ai #instaart #psychedelicarts #machinelearning #abstractpainting #deepdream #deeplearning #visualarts #artificialintelligence #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #nodejs",
  "#photography #machinelearning #art #psychotherapie #dreamwork #arts #paintmixing #dreams #visualart #deepdream #deeplearning #visualarts #artificialintelligence #ai #intelligentart #automatedart #assistedart #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#automatedart #psychedelicarts #nodejs #dreamwork #deeplearning #deepdream #techie #intelligentart #meditativeart #arts #visualarts #artificialintelligence #ai #machinelearning #assistedart #visualart #photography #visualartist #javascript #psychedelics",
  "#consciousnessshift #dreambigger #visualartist #nodejs #abstractphoto #visualart #ai #abstractpost #instamoment #deepdream #deeplearning #arts #visualarts #artificialintelligence #machinelearning #intelligentart #automatedart #assistedart #photography #javascript #psychedelics #psychedelicarts",
  "#intuitivepainting #automatedart #mindgames #techie #intelligentart #arts #artesanal #psych #deepdream #deeplearning #visualarts #artificialintelligence #ai #machinelearning #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#visualarts #intelligentart #instalike #psychedelics #dreamwork #assistedart #engineering #artificialintelligence #dreams #javascript #deepdream #deeplearning #arts #ai #machinelearning #automatedart #visualart #photography #visualartist #psychedelicarts #nodejs",
  "#intelligentart #artlovers #deepdream #nodejs #javascript #paintingprocess #engineering #dreamchaser #visualartist #photography #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #automatedart #assistedart #visualart #psychedelics #psychedelicarts",
  "#awesomepictures #assistedart #mindful #api #innovations #arts #photography #abstractpainter #deepdream #painttoolsai #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #visualart #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#deeplearning #psychodelicart #instagood #instagram #assistedart #graphiart #awesomeart #visualarts #photographs #abstractpainter #deepdream #arts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#meditar #assistedart #innovators #arte #artistsoninstagram #ai #automatedart #psychedelics #scienceisawesome #deepdream #deeplearning #arts #visualarts #artificialintelligence #machinelearning #intelligentart #visualart #photography #visualartist #javascript #psychedelicarts #nodejs",
  "#oilpainting #arts #dreamwork #artificialintelligence #dreampop #automatedart #awesomeearth #deeplearning #javascript #graphictatoo #deepdream #visualarts #ai #machinelearning #intelligentart #assistedart #visualart #photography #visualartist #psychedelics #psychedelicarts #nodejs",
  "#visualarts #visualartist #nodejs #beautiful_world #javascript #psychedelicarts #artificialintelligence #photography #oilpainting #deepdream #deeplearning #arts #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #psychedelics",
  "#ai #assistedart #psychedelicarts #photoart #deeplearning #nodejs #intuitivepainting #automatedart #deepdream #arts #visualarts #artificialintelligence #machinelearning #intelligentart #visualart #photography #visualartist #javascript #psychedelics",
  "#artificialintelligence #psychedelics #visualarts #visualartist #ai #psycho #software #art #innovador #deepdream #deeplearning #arts #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #javascript #psychedelicarts #nodejs",
  "#painttoolsai #arts #deepdream #javascript #psychedelics #visualartist #artificialintelligence #visualart #photography #deeplearning #visualarts #ai #machinelearning #intelligentart #automatedart #assistedart #psychedelicarts #nodejs",
  "#innovations #automatedart #visualart #nodejs #machinelearning #artificialintelligence #artsy #instalove #visualartist #deepdream #deeplearning #arts #visualarts #ai #intelligentart #assistedart #photography #javascript #psychedelics #psychedelicarts",
  "#psycho #techy #photography #psychotherapie #deepdream #ai #intelligentart #arts #psychedelicart #deeplearning #visualarts #artificialintelligence #machinelearning #automatedart #assistedart #visualart #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#abstract_post #paintlife #deeplearning #automatedart #photos #abstractpainter #instalike #psychedelics #softwareengineer #deepdream #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #visualart #photography #visualartist #javascript #psychedelicarts #nodejs",
  "#arts #instagood #artificialintelligence #visualarts #techie #assistedart #javascript #photography #meditacion #deepdream #deeplearning #ai #machinelearning #intelligentart #automatedart #visualart #visualartist #psychedelics #psychedelicarts #nodejs",
  "#visualart #dreamchaser #psychedelics #deepdream #automatedart #javascript #arts #instacool #photojournalism #minds #deeplearning #visualarts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #photography #visualartist #psychedelicarts #nodejs",
  "#artspotlight #visualart #intelligentart #visualartist #visualarts #nodejs #automatedart #psycho #meditationquotes #psychedelics #deepdream #deeplearning #arts #artificialintelligence #ai #machinelearning #assistedart #photography #javascript #psychedelicarts",
  "#assistedart #visualarts #dreamlife #dreamers #awesomeearth #visualartist #arts #artwork #artistsoninstagram #artistic #deepdream #deeplearning #artificialintelligence #ai #machinelearning #intelligentart #automatedart #visualart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#photos #visualartist #machinelearning #arts #instagrammers #mindsetofgreatness #ai #assistedart #psychedelicarts #deepdream #deeplearning #visualarts #artificialintelligence #intelligentart #automatedart #visualart #photography #javascript #psychedelics #nodejs",
  "#photography #psychedelicarts #javascript #arts #arte #instaart #intelligentart #assistedart #artificialintelligence #deepdream #deeplearning #visualarts #ai #machinelearning #automatedart #visualart #visualartist #psychedelics #nodejs",
  "#abstract_post #innovador #dreamwork #psychedelicarts #beauty #assistedart #graphiart #psychology #automatedart #visualart #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #photography #visualartist #javascript #psychedelics #nodejs",
  "#assistedart #javascript #abstracto #intelligentart #visualarts #artistsoninstagram #originalpainting #psychedelicarts #deepdream #deeplearning #arts #artificialintelligence #ai #machinelearning #automatedart #visualart #photography #visualartist #psychedelics #nodejs",
  "#machinelearning #ai #graphicliner #beautifulart #engineering #abstractphoto #graphiart #assistedart #deepdream #digitalpainting #deeplearning #arts #visualarts #artificialintelligence #intelligentart #automatedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs",
  "#visualart #psycho #machinelearning #photos #abstractpost #nodejs #acrylicpaintings #deeplearning #deepdream #arts #visualarts #artificialintelligence #ai #intelligentart #automatedart #assistedart #photography #visualartist #javascript #psychedelics #psychedelicarts",
  "#javascript #machinelearning #psychedelics #artificialintelligence #ai #assistedart #arts #deeplearning #intelligentart #deepdream #visualarts #automatedart #visualart #photography #visualartist #psychedelicarts #nodejs",
  "#visualarts #arts #assistedart #deeplearning #visualartist #intelligentart #speedpaint #abstractart #deepdream #artificialintelligence #ai #machinelearning #automatedart #visualart #photography #javascript #psychedelics #psychedelicarts #nodejs",
  "#nodejs #automatedart #deepdream #artificialintelligence #javascript #awesomesurreal #instamoment #psychedelics #visualart #deeplearning #arts #visualarts #ai #machinelearning #intelligentart #assistedart #photography #visualartist #psychedelicarts",
  "#psychedelics #arts #deepdream #automatedart #machinelearning #beautiful_world #beautiful #visualart #instaart #deeplearning #visualarts #artificialintelligence #ai #intelligentart #assistedart #photography #visualartist #javascript #psychedelicarts #nodejs",
  "#automatedart #visualart #psychedelics #deeplearning #photoart #photography #paintparty #visualarts #innovador #nodejs #deepdream #arts #artificialintelligence #ai #machinelearning #intelligentart #assistedart #visualartist #javascript #psychedelicarts"
];

module.exports = function captionGenerator() {
  return `caption
  .
  .
  ${randomItem(tags)}`;
};

/**
 * Tags sequence generator, uncomment to generate additional ones
 */
// const permanentTags =
//   " #deepdream #deeplearning #arts #visualarts #artificialintelligence #ai #machinelearning #intelligentart #automatedart #assistedart #visualart #photography #visualartist #javascript #psychedelics #psychedelicarts #nodejs";
// const maxWords =
//   _.max(tags.map(hashtags => hashtags.split(" ").length)) -
//   permanentTags.split(" ").length -
//   2;
// let hashtags = [];
// let all = [];
// const allTags = _.flatten(tags.map(hashtags => hashtags.split(" ")));
// for (let i = 0; i < maxWords; i++) {
//   hashtags.push(randomItem(allTags));
// }
// all.push(_.uniq((hashtags.join(" ") + permanentTags).split(" ")).join(" "));
// console.log(all);