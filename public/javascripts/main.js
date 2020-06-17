const app = {
  init() {
    const $initialBox = $(this.noContactsBox());
    const $addContact = $(this.addContact('Create Contact', 'Add'));
    $initialBox.addClass('initial');
    $addContact.hide().addClass('add');
    $('main').append($initialBox).fadeIn();
    $('main').append($addContact);

    this.bind();
  },

  noContactsBox() {
    const template = Handlebars.compile($('#no-contacts').html());
    return template();
  },

  addContact(title, button) {
    const template = Handlebars.compile($('#contact-edit').html());
    const info = { title, button };
    return template(info);
  },

  bind() {
    $('a.add-contact').click(function (e) {
      e.preventDefault();
     
      $('main').children().hide(function () {
        $('div.add').show(500); 
      });
    });

    $('button.cancel').click(function (e) {
      $('div.add').fadeOut(function () {
        $('div.initial').fadeIn();
      });
    });
  },
};

app.init();
