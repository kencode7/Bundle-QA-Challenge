pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Result", function() {
    let jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql({ "companies": { "Google": 2400, "Facebook": 500 }, "id": "\n\n" });
})
