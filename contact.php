<?php include './includes/header.php'; ?>

<!--============================= CONTACT SECTION =============================-->
<div class="container">
    <div class="row">
        <div class="col-md-12">
            <h1>Contact Us</h1>
            <form action="#">
                <div class="form-group">
                    <label for="email">Email</label>
                    <input id="email" class="form-control" type="email">
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input id="name" class="form-control" type="text">
                </div>
                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" class="form-control" type="text"></textarea>
                </div>
                <div class="form-group">
                    <button class="btn btn-dark">Submit</button>
                </div>
            </form>
        </div>
    </div>
</div>

<?php include './includes/footer.php'; ?>