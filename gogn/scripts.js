document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('#form');
  var texts = document.querySelector('.texts');

  text.init(form, texts);
});

var text = (function() {
  var form = document.querySelector('#form');
  var input = form.querySelector('.heading input');    // input fyrir fyrirsögn
  var textarea = form.querySelector('.textarea textarea'); // textarea fyrir texta

  var textContainer = document.querySelector('.texts');  // div sem inniheldur texta
  var errorContainer = form.querySelector('.error'); // div sem inniheldur villuskilaboð

  var invert = form.querySelector('.checkbox .invert');     // checkbox fyrir hvort eigi að vera inverted
  var uppercase = form.querySelector('.checkbox .uppercase');  // checkbox fyrir hvort fyrirsögn eigi að vera í hástöfum


  function submit(e) {
    e.preventDefault(); // Stoppar síðuna í að reloada

    var valid = validHeading(input.value.length); // Tékkar hvort fyrirsögnin sé eins og við viljum
    if (valid == true){
      valid = validText(textarea.value.length); // Tékkar hvort að textinn sé eins og við viljum
      if (valid == true){
        addText(input.value, textarea.value, invert.checked, uppercase.checked); // Bætir textanum við ef allt er í lagi
        setError(""); // Hreinsar villuskilaboðin
        clearForm(); // Hreinsa formið
      } else {
        setError("Texti má ekki vera tómur eða yfir 1.000 stafa langur."); // Setur villuskilaboð ef texti  er ekki réttur
      }
    } else {
      setError("Fyrirsögn má ekki vera tóm eða yfir 100 stafi löng."); // Setur villuskilaboð ef fyrirsögn er ekki rétt
    }
  }

  /**
   * Setur villutexta í errorContainer.
   * Fjarlægir villutexta ef text er tómistrengur.
   */
  function setError(text) {
    form.querySelector('.error').textContent = text;
  }

  /**
   * Staðfestir að fyrirsögn sé rétt. Skilar true ef lengd er > 0 og <= 100
   */
  function validHeading(value) {
    if (value > 0 && value <= 100) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Staðfestir að texti sé réttur. Skilar true ef lengd er > 0 og <= 1000
   */
  function validText(value) {
    if (value > 0 && value <= 1000) {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Bætir fyrirsögn og texta við textContainer.
   * Sér um að búa til öll element og bæta við.
   * Ef isInverted er true er "inverted" class bætt við .text
   * Ef isUppercase er true er "uppercase" class bætt við h2
   */
  function addText(heading, text, isInverted, isUppercase) {
    var div = document.createElement('div');
    div.className = "text";

    var fyrirsogn = document.createElement('h2');
    fyrirsogn.textContent = heading;
    if (isUppercase == true){
      fyrirsogn.className = "uppercase";
    }

    var texti = document.createElement('p');
    texti.textContent = text;
    if (isInverted == true) {
      div.className = "text inverted";
    }

    var textsdiv = document.querySelector('.texts');
    div.appendChild(fyrirsogn);
    div.appendChild(texti);
    textsdiv.appendChild(div);
  }

  /**
   * Sér um að hreinsa form, taka texta úr input og textarea, inverted og
   * uppercase sett sem ótjékkuð
   */
  function clearForm() {
    form.querySelector('.heading input').value = "";
    form.querySelector('.textarea textarea').value = "";
    form.querySelector('.checkbox .invert').checked = false;
    form.querySelector('.checkbox .uppercase').checked = false;
  }

  /**
   * Setur upp allar private breytur með því að nota querySelector
   * Setur eventlistener á submit
   */
  function init(form, texts) {
    input = form.querySelector('.heading input');
    textarea = form.querySelector('.textarea textarea');

    textContainer = texts;
    errorContainer = form.querySelector('.error');

    invert = form.querySelector('.checkbox .invert');
    uppercase = form.querySelector('.checkbox .uppercase');

    var takki = form.querySelector('button');

    takki.addEventListener('click',function(e){
      submit(e);
    });
  }

  return {
    init: init
  }
})();
