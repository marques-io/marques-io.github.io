$(function () {
  $('.hobbies__blobs .blob').each(function () {
    $(this).css('border-radius', generateBorderRadiusBlob());
  });
  $('.hobbies__item__image img').each(function () {
    $(this).css('border-radius', generateBorderRadiusBlob());
  });
});
