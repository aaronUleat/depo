
var app = new Vue({
    el: '#search-transaction',
    data: {
        company: '',
        pin: '',
        datefor: '',
        dateto: '',
        from: '',
        procesor: '',
        ccrbrand: '',
        profile: '',
        ccr: '',
        transactionType: '',
        transactionStatus: ''
    },
    mounted: function () {
        $('#dateFor').datepicker();
        $('#dateTo').datepicker();
    },
    computed: {
        searchTransaction: function () {
            return this.company || this.pin || this.datefor && this.dateto || this.procesor || this.ccrbrand || this.profile || this.ccr || this.transactionType || this.transactionStatus;
        }
    },

    methods: {
        bluFor: function () {
            var forNode = document.querySelector('#dateFor').value;
            this.datefor = forNode;
            var toNode = document.querySelector('#dateTo').value;
            this.dateto = toNode;
        }
    }

});
//# sourceMappingURL=deposits.js.map
