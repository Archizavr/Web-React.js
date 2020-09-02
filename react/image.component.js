class Image extends React.Component {
    render() {
        let html = e("div", null, "test");
        let attributes = {className: "image", style: {
            backgroundImage: "url(resources/images/forest.jpg)"
        } 
    };
        return e("div",attributes, html);
    }
}
