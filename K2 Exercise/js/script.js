$(document).ready(function () {
    var text = `
    Product or Service steps<br>
    1- Assessment & Planning - Review the current portal setup and plan the update process.<br>
    2- Backup & Safety Check - Create a complete backup of the portal to prevent data loss.<br>
    3- Update Implementation - Apply software, plugin, and security updates according to the plan.<br>
    4- Testing & Validation - Verify that all features are working correctly.<br>
    5- Optimization & Fine-Tuning - Enhance speed, usability, and security based on testing results.
    `;

    // Use setTimeout to ensure K2 renders the control first
    setTimeout(function() {
        $('[name*="ServiceStepsBox"]').html(text);
    }, 100);
});

(function ($) {
    // Ensure the form and all controls are loaded
    $(document).ready(function () {
        // Wait until the chart container is available in DOM
        var checkExist = setInterval(function () {
            if ($('#donut-chart').length && typeof d3 !== 'undefined') {
                clearInterval(checkExist);

                const data = [
                    { label: 'In-Progress', arcValue: 12, displayValue: 419, color: '#f5d0a8' },
                    { label: 'Closed', arcValue: 40, displayValue: 4104, color: '#9b87f5' },
                    { label: 'Pending', arcValue: 20, displayValue: 628, color: '#ff9b8a' }
                ];

                const totalDisplay = data.reduce((sum, d) => sum + d.displayValue, 0);
                const width = 430, height = 430, radius = Math.min(width, height) / 2 - 80, donutWidth = 55;

                const svg = d3.select('#donut-chart')
                    .attr('width', width)
                    .attr('height', height)
                    .append('g')
                    .attr('transform', `translate(${width / 2}, ${height / 2})`);

                const arc = d3.arc()
                    .innerRadius(radius - donutWidth + 20)
                    .outerRadius(radius)
                    .padAngle(0.09)
                    .cornerRadius(8);

                const pie = d3.pie()
                    .value(d => d.arcValue)
                    .sort(null)
                    .startAngle(-Math.PI / 2)
                    .endAngle(3 * Math.PI / 2);

                const arcs = svg.selectAll('.arc')
                    .data(pie(data))
                    .enter()
                    .append('g')
                    .attr('class', 'arc');

                arcs.append('path')
                    .attr('class', 'arc-segment')
                    .attr('fill', d => d.data.color)
                    .attr('d', arc);

                arcs.each(function (d) {
                    const arcGroup = d3.select(this);
                    const percent = Math.round((d.data.displayValue / totalDisplay) * 100);
                    const angle = (d.startAngle + d.endAngle) / 2;
                    const labelRadius = radius + 35;
                    const x = Math.cos(angle - Math.PI / 2) * labelRadius;
                    const y = Math.sin(angle - Math.PI / 2) * labelRadius;

                    const fo = arcGroup.append('foreignObject')
                        .attr('x', x - 60)
                        .attr('y', y - 40)
                        .attr('width', 120)
                        .attr('height', 80);

                    const labelDiv = fo.append('xhtml:div')
                        .attr('class', 'label-box')
                        .style('text-align', 'center');

                    labelDiv.append('div')
                        .attr('class', 'label-value')
                        .html(`${d.data.displayValue.toLocaleString()} <span class="label-percent">(${percent}%)</span>`);

                    labelDiv.append('div')
                        .attr('class', 'label-name')
                        .text(d.data.label);
                });
            }
        }, 300);
    });
})(jQuery);
