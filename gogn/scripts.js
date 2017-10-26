document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#form');
  var texts = document.querySelector('.texts');

  text.init(form, texts);
});

var text = (function() {
  // skilgreina "private" breytur sem við notum í forriti
  var input;    // input fyrir fyrirsögn
  var textarea; // textarea fyrir texta

  var textContainer;  // div sem inniheldur texta
  var errorContainer; // div sem inniheldur villuskilaboð

  var invert;     // checkbox fyrir hvort eigi að vera inverted
  var uppercase;  // checkbox fyrir hvort fyrirsögn eigi að vera í hástöfum

  /**
   * Fall sem sér um að athuga hvort form sé rétt útfyllt:
   * - Athugar hvort fyrirsögn sé gild
   * - Athugar hvort texti sé gildur
   * - Ef villur eru til staðar, bætir ekki við texta en
   *   + Setur villutexta m.v. hvað er vitlaust
   *   + Setur "invalid" class á reit sem er vitlaust
   * - Ef engar villur, bætir við texta og
   *   + Fjarlægir villutexta
   *   + Fjarlægir "invalid" class af öllu
   *   + Hreinsar form
   */
  function submit(e) {
    e.preventDefault();
  }

  /**
   * Setur villutexta í errorContainer.
   * Fjarlægir villutexta ef text er tómistrengur.
   */
  function setError(text) {
  }

  /**
   * Staðfestir að fyrirsögn sé rétt. Skilar true ef lengd er > 0 og <= 100
   */
  function validHeading(value) {
  }

  /**
   * Staðfestir að texti sé réttur. Skilar true ef lengd er > 0 og <= 1000
   */
  function validText(value) {
  }

  /**
   * Bætir fyrirsögn og texta við textContainer.
   * Sér um að búa til öll element og bæta við.
   * Ef isInverted er true er "inverted" class bætt við .text
   * Ef isUppercase er true er "uppercase" class bætt við h2
   */
  function addText(heading, text, isInverted, isUppercase) {
  }

  /**
   * Sér um að hreins form, taka texta úr input og textarea, inverted og
   * uppercase sett sem ótjékkuð
   */
  function clearForm() {
  }

  /**
   * Setur upp allar private breytur með því að nota querySelector
   * Setur eventlistener á submit
   */
  function init(form, texts) {
    input = form.querySelector('.heading input');

    console.log('input fannst sem', input);
  }

  return {
    init: init
  }
})();
