require([
    'underscore',
    'jquery',
    'splunkjs/mvc',
    'splunkjs/mvc/tableview',
    'splunkjs/mvc/simplexml/ready!'
], function(_, $, mvc, TableView) {
     // Row Coloring Example with custom, client-side range interpretation
    var CustomRangeRenderer = TableView.BaseCellRenderer.extend({
        canRender: function(cell) {
            // Enable this custom cell renderer for the following fields
            return _(['date','time','timezone','MACB','extracted_source',
                        'extracted_sourcetype','type','user','extracted_host',
                        'short','desc','version','filename','inode','notes',
                        'format','extra']).contains(cell.field);
        },
        render: function($td, cell) {
            var value = String(cell.value);

            //Conditional formatting rule 1
            if (cell.field === 'desc') {
                if (value.indexOf('URL:file:///') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 2
            if (cell.field === 'date'|| cell.field === 'time' || cell.field === 'timezone'|| cell.field === 'MACB'|| 
                cell.field === 'extracted_source'|| cell.field === 'extracted_sourcetype'|| 
                cell.field === 'type'|| cell.field === 'user'|| cell.field === 'extracted_host'|| 
                cell.field === 'short'|| cell.field === 'desc'|| cell.field === 'version'|| 
                cell.field === 'filename') {
                if (value === 'LNK') {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 3
            if (cell.field === 'short') {
                if (value.indexOf('opened by') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 4
            if (cell.field === 'short') {
                if (value.indexOf('URL:file:///') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 5
            if (cell.field === 'desc') {
                if (value.indexOf('typed the following cmd') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 6
            if (cell.field === 'type') {
                if (value.indexOf('CMD typed') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 7
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('RunMRU key') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 8
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('Firefox 3 history') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 9
            if (cell.field === 'short') {
                if (value.indexOf('CreateDate') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 10
            if (cell.field === 'extracted_source') {
                if (value.indexOf('WEBHIST') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 11
            if (cell.field === 'extracted_sourcetype') {
                if (value === 'Internet Explorer') {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 12
            if (cell.field === 'desc') {
                if (value.indexOf('URL') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 13
            if (cell.field === 'type') {
                if (value.indexOf('URL') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 14
            if (cell.field === 'desc') {
                if (value.indexOf('http://') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 15
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('Log') > -1) {
                    $td.addClass('LOG_FILE');
                }
            }

            //Conditional formatting rule 16
            if (cell.field === 'desc') {
                if (value.indexOf('LSO') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 17
            if (cell.field === 'desc') {
                if (value.indexOf('[DELETED]') > -1) {
                    $td.addClass('DELETED_DATA');
                }
            }

            //Conditional formatting rule 18
            if (cell.field === 'desc') {
                if (value.indexOf('drive mounted') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 19
            if (cell.field === 'short') {
                if (value.indexOf('visited file://') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 20
            if (cell.field === 'type') {
                if (value.indexOf('LSO') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 21
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('LSO') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 22
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('Flash Cookie') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 23
            if (cell.field === 'extracted_source') {
                if (value.indexOf('LSO') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 24
            if (cell.field === 'short'|| cell.field === 'desc'|| 
                cell.field === 'version'|| cell.field === 'filename') {
                if (value.indexOf('.lnk') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 25
            if (cell.field === 'short') {
                if (value.indexOf('Recently opened file') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 26
            if (cell.field === 'short') {
                if (value.indexOf('RunMRU') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 27
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('XP Firewall Log') > -1) {
                    $td.addClass('LOG_FILE');
                }
            }

            //Conditional formatting rule 28
            if (cell.field === 'type') {
                if (value.indexOf('Drive last mounted') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 29
            if (cell.field === 'extracted_source') {
                if (value.indexOf('LOG') > -1) {
                    $td.addClass('LOG_FILE');
                }
            }

            //Conditional formatting rule 30
            if (cell.field === 'short') {
                if (value.indexOf('visited') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }
            //Conditional formatting rule 31
            if (cell.field === 'short') {
                if (value.indexOf('URL') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 32
            if (cell.field === 'short') {
                if (value.indexOf('Flash Cookie') > -1) {
                    $td.addClass('WEB_HISTORY');
                }
            }

            //Conditional formatting rule 33
            if (cell.field === 'short'|| cell.field === 'desc'|| 
                cell.field === 'version'|| cell.field === 'filename') {
                if (value.indexOf('RECYCLE') > -1) {
                    $td.addClass('DELETED_DATA');
                }
            }

            //Conditional formatting rule 34
            if (cell.field === 'desc') {
                if (value.indexOf('file:///') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 35
            if (cell.field === 'short') {
                if (value.indexOf('drive mounted') > -1) {
                    $td.addClass('FOLDER_OPENING');
                }
            }
            //Conditional formatting rule 36
            if (cell.field === 'desc') {
                if (value.indexOf('Recently opened file of extension') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 37
            if (cell.field === 'short') {
                if (value.indexOf('UEME_RUNPIDL') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 38
            if (cell.field === 'short') {
                if (value.indexOf('ShellNoRoam/Bags') > -1) {
                    $td.addClass('FOLDER_OPENING');
                }
            }

            //Conditional formatting rule 39
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('SetupAPI Log') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 40
            if (cell.field === 'short') {
                if (value.indexOf('BAGMRU') > -1) {
                    $td.addClass('FOLDER_OPENING');
                }
            }

            //Conditional formatting rule 41
            if (cell.field === 'short') {
                if (value.indexOf('RemovableMedia') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 42
            if (cell.field === 'short') {
                if (value.indexOf('STORAGE/RemovableMedia') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 43
            if (cell.field === 'short') {
                if (value.indexOf('USB') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 44
            if (cell.field === 'short') {
                if (value.indexOf('/USB/Vid_') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 45
            if (cell.field === 'type') {
                if (value.indexOf('File Opened') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }
            //Conditional formatting rule 46
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('Shortcut LNK') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 47
            if (cell.field === 'short') {
                if (value.indexOf('Enum/USBSTOR/Disk&Ven_') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 48
            if (cell.field === 'extracted_sourcetype') {
                if (value === 'RecentDocs key') {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 49
            if (cell.field === 'short') {
                if (value.indexOf('volume mounted') > -1) {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 50
            if (cell.field === 'extracted_sourcetype') {
                if (value === 'Mountpoints2 key') {
                    $td.addClass('DEVICE_or_USB_USAGE');
                }
            }

            //Conditional formatting rule 51
            if (cell.field === 'short') {
                if (value.indexOf('DELETED') > -1) {
                    $td.addClass('DELETED_DATA');
                }
            }

            //Conditional formatting rule 52
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('Enum/USBSTOR/Disk&Ven_') > -1) {
                    $td.addClass('DELETED_DATA');
                }
            }

            //Conditional formatting rule 53
            if (cell.field === 'extracted_sourcetype') {
                if (value === '$Recycle.bin') {
                    $td.addClass('DELETED_DATA');
                }
            }

            //Conditional formatting rule 54
            if (cell.field === 'type') {
                if (value.indexOf('Folder Opened') > -1) {
                    $td.addClass('FILE_OPENING');
                }
            }

            //Conditional formatting rule 55
            if (cell.field === 'desc') {
                if (value === '.pf') {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 56
            if (cell.field === 'type') {
                if (value.indexOf('Last run') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 57
            if (cell.field === 'short') {
                if (value.indexOf('MUICache') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 58
            if (cell.field === 'extracted_source') {
                if (value === 'PRE') {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 59
            if (cell.field === 'extracted_sourcetype') {
                if (value == 'UserAssist key') {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 60
            if (cell.field === 'type') {
                if (value === 'Time of Launch') {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 61
            if (cell.field === 'short') {
                if (value.indexOf('UEME_') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 62
            if (cell.field === 'extracted_sourcetype') {
                if (value.indexOf('Prefetch') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 63
            if (cell.field === 'extracted_sourcetype') {
                if (value === 'XP Prefetch') {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 64
            if (cell.field === 'short') {
                if (value.indexOf('UEME_RUNPATH') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 65
            if (cell.field === 'filename') {
                if (value.indexOf('.pf') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 66
            if (cell.field === 'short') {
                if (value.indexOf('was executed') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

            //Conditional formatting rule 67
            if (cell.field === 'short') {
                if (value.indexOf('.pf') > -1) {
                    $td.addClass('EXECUTION');
                }
            }

        $td.text(value.toString()).addClass('string');
        }
    });
    mvc.Components.get('colorized').getVisualization(function(tableView) {
        // Add custom cell renderer, the table will re-render automatically.
        tableView.addCellRenderer(new CustomRangeRenderer());
    });
});