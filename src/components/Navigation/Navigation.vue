<template>
    <nav class="navbar navbar-default">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#mainnav-collapse" aria-expanded="false">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="home-1.html">
                    <img src="images/brand/logo.png" style="width:14em; margin-left: -40px" alt="Site Logo">
                </a>
            </div>

            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="mainnav-collapse">
                <ul class="nav navbar-nav navbar-right">
                    <li class="active">
                        <a href="home.html">Acceuil</a>
                    </li>
                    <li>
                        <a href="products.html">Produits</a>
                        <i class="m-sub-toggle"></i>
                        <ul class="sub-menu menu-items">
                            <li>
                                <a href="#">Imprimerie</a>
                            </li>
                            <li>
                                <a href="#">Sérigraphie Moderne</a>
                            </li>
                            <li>
                                <a href="#">Peinture</a>
                            </li>
                            <li>
                                <a href="#">Broderie</a>
                            </li>
                            <li>
                                <a href="#">Impression Numerique</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="about.html">Qui Sommes-nous?</a>
                    </li>
                    <li>
                        <a href="references.html">Références</a>
                    </li>
                    <li>
                        <a href="team.html">L'équipe</a>
                    </li>
                    <li>
                        <a href="contact.html">Contact</a>
                    </li>
                    <li id="search-toggle" class="search-menu-item">
                        <a href="#"></a>
                        <form id="navSearchForm" class="nav-search-form" action="#" method="post">
                            <input type="search" name="searchkeyword" placeholder="Rechercher..." required>
                            <button type="submit" name="searchsubmit">
                                <i class="fa fa-search"></i>
                            </button>
                        </form>
                    </li>
                    <li class="block-minicart">
                        <a href="cart.html" class="cartlink">
                            <i class="fa fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container-fluid -->
    </nav>
</template>


<style>

</style>
