# Ads Reports

This directory is for local Google Ads report snapshots used to compare campaign changes over time.

Create one dated subdirectory per export batch, using `YYYY-MM-DD`, and store the raw CSV exports plus a short notes file for that date. The report subdirectories are intentionally gitignored because they may contain campaign performance data, search terms, conversion data, and account details.

Recommended exports:

- Search terms report
- Search keyword report with Quality Score components
- Ad report
- Negative keyword details report
- Conversion actions report when conversion tracking changes

Use the dated notes to record the campaign state at the time of export, major changes made that day, and the next comparison questions.
