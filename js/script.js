
function generate(e) {
  console.log('got called')
  const domElement = document.getElementById('pricing-table')
  html2canvas(domElement, { onclone: (document) => {
    document.getElementById('print-button').style.visibility = 'hidden'
  }})
  .then((canvas) => {
    const img = canvas.toDataURL('image/png')
    const pdf = new jsPdf('p', 'pt', 'a4')
    console.log('generating...')
    pdf.addImage(img, 'JPEG', 0, 0, width, height)
    pdf.save('tolu.pdf')
  })
}

document.getElementById('generate').onclick = generate

// generate = function()
// {
// 	var pdf = new jsPDF('p', 'pt', 'a4');
// 	pdf.setFontSize(18);
// 	pdf.fromHTML(document.getElementById('html-2-pdfwrapper'), 
// 		margins.left, // x coord
// 		margins.top,
// 		{
// 			// y coord
// 			width: margins.width// max width of content on PDF
// 		},function(dispose) {
// 			headerFooterFormatting(pdf, pdf.internal.getNumberOfPages());
// 		}, 
// 		margins);
		
// 	var iframe = document.createElement('iframe');
// 	iframe.setAttribute('style','position:absolute;right:0; top:0; bottom:0; height:100%; width:650px; padding:20px;');
// 	document.body.appendChild(iframe);
	
// 	iframe.src = pdf.output('datauristring');
// };