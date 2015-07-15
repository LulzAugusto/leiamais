export function SettingsController($timeout) {
    let vm = this;

    vm.salvar = salvar;
    vm.user = {
        name: 'Robert Luiz',
        last: 'Knowles',
        phone: '+55 (82) 99999-2345',
        email: 'rlknowles@gmail.com',
        cpf: '111.222.333-44'
    };

    function salvar() {
        vm.loading = true;

        $timeout(function() {
            vm.loading = false;
            vm.confirmed = true;
        }, 3000).then(function() {
            return $timeout(function() {
                vm.confirmed = false;
            }, 3000);
        });
    }
}
