function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'skills-copilot-codespaces-vscode/member.html',
        controller: SkillsMemberCtrl,
        controllerAs: 'skillsMemberCtrl',
        bindToController: true,
        scope: {
            member: '='
        }
    };
}