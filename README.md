Sample Angular-Meteor application

- User Name: admin
- Password: admin

Available Routes:
- /customers - Displays a list of customers
- /vendors   - Displays a list of vendors

This revision of the app is being referenced in the following issue: https://github.com/Urigo/angular-meteor/issues/258

When attempting to view /vendors, you should see the "Customers" header with no vendors listed. If you open /.meteor/packages and reverse the order of angular-base:ui-customer and angular-base:ui-vendor, the Vendor page will work and the Customer page will have the problem.

This is due to the fact that angular-meteor's plugin handler only uses compileStep.inputPath when adding .ng.html files to the $templateCache.  Since the list.ng.html files in both packages use the same relative path, they overwrite each other.
