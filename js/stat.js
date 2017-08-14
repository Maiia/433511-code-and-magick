'use strict';

window.renderStatistics = function (ctx, names, times) {
  var leftMargin = 100;
  var leftPad = leftMargin + 30;
  var topMargin = 10;
  var columnsTopMargin = 85;

  var maxTime = Math.max.apply(Math, times);
  var histogramWidth = 40;
  var histogramHeight = 150;
  var step = histogramHeight / maxTime;
  var histogramMargin = 50;

  var myColor = 'rgba(255, 0, 0, 1)';

  var textLine1 = 'Ура, вы победили!';
  var textLine2 = 'Список результатов:';

  var columnsMarginStep = histogramWidth + histogramMargin;
  var columnsBottomPosition = columnsTopMargin + histogramHeight;

	// shadow
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(leftMargin + 10, topMargin + 10, 420, 270);

  // rectangle
  ctx.fillStyle = 'white';
  ctx.fillRect(leftMargin, topMargin, 420, 270);

  // top text
  ctx.font = 'PT Mono 16px';
  ctx.fillStyle = 'black';
  ctx.textBaseline = 'hanging';
  ctx.fillText(textLine1, leftPad, topMargin + 20);
  ctx.fillText(textLine2, leftPad, topMargin + 35);

  // result columns
  for (var i = 0; i < times.length; i++) {
    var randomColor = 'rgba(0, 0, 255,' + (Math.random() * 0.3 + 0.3) + ')';
    var columnLeftIndent = leftPad + columnsMarginStep * i;
    var columnResultHeight = times[i] * step;
    var columnTopPosition = columnsBottomPosition - columnResultHeight;

    // Colors Column Assignment
    ctx.fillStyle = names[i] !== 'Вы' ? randomColor : myColor;

    ctx.fillRect(columnLeftIndent, columnTopPosition, histogramWidth, columnResultHeight); // columns
    ctx.fillText(Math.round(times[i]), columnLeftIndent, columnTopPosition - 17); // points
    ctx.fillText(names[i], columnLeftIndent, columnsBottomPosition + 10); // names
  }
};
