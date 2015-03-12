module.exports = function(srcwidth, srcheight, targetwidth, targetheight, fLetterBox)
{
  var fScaleOnWidth, result, scaleX1, scaleX2, scaleY1, scaleY2;

  result = {
    width: 0,
    height: 0,
    fScaleToTargetWidth: true
  };

  if ((srcwidth <= 0) || (srcheight <= 0) || (targetwidth <= 0) || (targetheight <= 0)) {
    return result;
  }

  scaleX1 = targetwidth;
  scaleY1 = (srcheight * targetwidth) / srcwidth;
  scaleX2 = (srcwidth * targetheight) / srcheight;
  scaleY2 = targetheight;

  fScaleOnWidth = scaleX2 > targetwidth;

  if (fScaleOnWidth)
  {
    fScaleOnWidth = fLetterBox;
  }
  else
  {
    fScaleOnWidth = !fLetterBox;
  }

  if (fScaleOnWidth)
  {
    result.width = Math.floor(scaleX1);
    result.height = Math.floor(scaleY1);
    result.fScaleToTargetWidth = true;
  }
  else
  {
    result.width = Math.floor(scaleX2);
    result.height = Math.floor(scaleY2);
    result.fScaleToTargetWidth = false;
  }

  result.targetleft = Math.floor((targetwidth - result.width) / 2);
  result.targettop = Math.floor((targetheight - result.height) / 2);
  return result;
};
