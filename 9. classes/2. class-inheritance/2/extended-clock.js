class ExtendedClock extends Clock {
  constructor(template) {
    super({template: template["template"]})
    this.precision = template["precision"];
  }
  start() {
    this.render();
    this.timer = setInterval(() => this.render(), this.precision);
  }
}