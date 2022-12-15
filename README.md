# minimizeDomElements
An html page coded with the minimal amount of dom elements
Chrome's Lighthouse pagespeed test will print a warning if the number of Dom Elements is above 1500. For a complicated page if you use flexbox only for layout, it can increase the number of Dom elements significantly.
This page is laid out with mostly CSS Grid. With Grid you can create grid layouts with named sections. Then you can assign items to each named section.
As a result, we can avoid adding extra divs to layout items.
