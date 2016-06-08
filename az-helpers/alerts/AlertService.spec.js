describe('AzAlertService', function () {
  var AzAlertService;

  beforeEach(module('az.helpers'));
  beforeEach(inject(function (_AzAlertService_) {
    AzAlertService = _AzAlertService_;
  }));

  it('alerts should start off empty', function () {
    expect(AzAlertService.alerts).toEqual([]);
  });

  describe('#_conditionallyAddAlert', function () {
    describe('when no same text and no same type', function () {
      beforeEach(function () {
        AzAlertService._conditionallyAddAlert('text1', 'type1');
      });
      it('should successfully add an alert', function () {
        expect(AzAlertService.alerts.length).toBe(1);
        expect(AzAlertService.alerts[0]).toEqual({
          text: 'text1',
          type: 'type1',
        });
      });
    });
    describe('when same text, but not same type', function () {
      beforeEach(function () {
        AzAlertService._conditionallyAddAlert('text1', 'type1');
        AzAlertService._conditionallyAddAlert('text1', 'type2');
      });
      it('should successfully add an alert', function () {
        expect(AzAlertService.alerts.length).toBe(2);
        expect(AzAlertService.alerts[1]).toEqual({
          text: 'text1',
          type: 'type2',
        });
      });
    });
    describe('when same type, but not same text', function () {
      beforeEach(function () {
        AzAlertService._conditionallyAddAlert('text1', 'type1');
        AzAlertService._conditionallyAddAlert('text2', 'type1');
      });
      it('should successfully add an alert', function () {
        expect(AzAlertService.alerts.length).toBe(2);
        expect(AzAlertService.alerts[1]).toEqual({
          text: 'text2',
          type: 'type1',
        });
      });
    });
    describe('when same type and same text', function () {
      beforeEach(function () {
        AzAlertService._conditionallyAddAlert('text1', 'type1');
        AzAlertService._conditionallyAddAlert('text1', 'type1');
      });
      it('shound not add the alert', function () {
        expect(AzAlertService.alerts.length).toBe(1);
      });
    });
  });

  describe('#closeAlert', function () {
    beforeEach(function () {
      AzAlertService._conditionallyAddAlert('text1', 'type1');
      AzAlertService.closeAlert({
        text: 'text1',
        type: 'type1',
      });
    });
    it('should remove the alert', function () {
      expect(AzAlertService.alerts.length).toEqual(0);
    });
  });
});
