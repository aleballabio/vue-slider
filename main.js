const app = new Vue({
    el: '#root',
    data: {
        activeIndex: 0,
        arrSlides: [
            {
                name: 'Svezia',
                image: '01.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
            },

            {
                name: 'Svizzera',
                image: '02.jpg',
                text: 'Lorem ipsum'
            },

            {
                name: 'Gran Bretagna',
                image: '03.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
            },

            {
                name: 'Germania',
                image: '04.jpg',
                text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },

            {
                name: 'Paradise',
                image: '05.jpg',
                text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'
            },
        ],
    },

    methods: {
        nextImage() {
            if (this.activeIndex === this.arrSlides.length - 1) {
                this.activeIndex = 0;
            }
            else {
                this.activeIndex++;
            }
        },

        previousImage() {
            if (this.activeIndex === 0) {
                this.activeIndex = this.arrSlides.length - 1;
            }
            else {
                this.activeIndex--;
            }
        }
    },

    setInterval(function() { this.activeIndex++ }, 3000),

});