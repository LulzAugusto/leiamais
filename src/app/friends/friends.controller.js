export function FriendsController($timeout) {
    let vm = this;

    vm.salvar = salvar;
    vm.null = function() {
        return;
    };
    vm.people = [
        {name: 'Tiago Cedrim', avatar: 'assets/photo.jpg'},
        {name: 'Diego Cedrim', avatar: 'assets/photo(1).jpg'},
        {name: 'Marcos Pereira Jr', avatar: 'assets/photo(2).jpg'},
    ];

    function salvar() {
        vm.loading = true;

        $timeout(function() {
            vm.loading = false;
            vm.confirmed = true;
        }, 3000).then(function() {
            return $timeout(function() {
                vm.confirmed = false;
                vm.selectedItem = undefined;
                vm.searchText = undefined;
            }, 3000);
        });
    }
}
