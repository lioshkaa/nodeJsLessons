var util = require("util");
let pharses = {
  Hello: "привет",
  World: "мир",
};
function PhraseError(message) {
  this.message = message;
  Error.captureStackTrace(this, PhraseError);
}

util.inherits(PhraseError, Error);
PhraseError.prototype.name = "PhraseError";

function HttpError(status, message) {
  this.status = status;
  this.message = message;
  Error.captureStackTrace(this, HttpError);
}

util.inherits(HttpError, Error);
HttpError.prototype.name = "HttpError";

function getPhrases(name) {
  if (!pharses[name]) {
    throw new PhraseError("Нет такой фразы: " + name);
  }
  return pharses[name];
}
function makePage(url) {
  if (url != "index.html") {
    throw new HttpError(404, "Нет такой страницы");
  }
  return util.format("%s, %s!", getPhrases("Hello"), getPhrases("World"));
}
try {
  let page = makePage("index.html");
  console.log(page);
} catch (e) {
  if (e instanceof HttpError) {
    console.log(e.status, e.message);
  } else {
    console.error(
      "Ошибка %s\n сообщение: %s\n стек: %s",
      e.name,
      e.message,
      e.stack
    );
  }
}
