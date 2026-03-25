import React from 'react';

export default function ComparisonTable() {
  const tableData = [
    { feature: "Built for classroom teachers", oyo: "✓", holy: "✕", others: "✕", c1: "yes", c2: "no", c3: "no" },
    { feature: "Native speaker audio", oyo: "✓", holy: "✓", others: "Partial", c1: "yes", c2: "yes", c3: "partial" },
    { feature: "Student name integration", oyo: "✓", holy: "✕", others: "✕", c1: "yes", c2: "no", c3: "no" },
    { feature: "Printable worksheets", oyo: "✓", holy: "✕", others: "✕", c1: "yes", c2: "no", c3: "no" },
    { feature: "Complete lesson flow", oyo: "✓", holy: "✕", others: "Partial", c1: "yes", c2: "no", c3: "partial" },
    { feature: "Free lessons to start", oyo: "✓", holy: "Trial", others: "Limited", c1: "yes", c2: "partial", c3: "partial" },
    { feature: "CE1–CM2 curriculum aligned", oyo: "✓", holy: "✕", others: "✕", c1: "yes", c2: "no", c3: "no" },
  ];

  return (
    <section className="section compare" id="compare">
      <div className="contain-sm">
        <p className="sec-label">Why Oyo Kids</p>
        <h2 className="sec-title">How We Compare</h2>
        <div className="ctable">
          <table>
            <thead>
              <tr>
                <th>Feature</th>
                <th>Oyo Kids</th>
                <th>Holy Owly</th>
                <th>Others</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr key={index}>
                  <td>{row.feature}</td>
                  <td className={row.c1}>{row.oyo}</td>
                  <td className={row.c2}>{row.holy}</td>
                  <td className={row.c3}>{row.others}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}