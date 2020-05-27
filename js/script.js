
generate = function() {
	
	var pdf = new jsPDF('p', 'pt', 'a4', true);
	pdf.setFontSize(14);

	pdf.html(document.getElementById('pricing-table'),
    {
      x: 30,
			html2canvas: {width: 550, scale: 0.6},
			callback: function () {
					pdf.save('document.pdf');
			}
    });
};